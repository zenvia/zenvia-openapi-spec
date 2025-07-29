import {
  OperationObject,
  PathItemObject,
  ResponseObject,
  SchemaObject,
} from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as batchDetailsRef } from '../../components/schemas/partners-contacts-api/batch-details';
import { ref as batchCreationResponseRef } from '../../components/schemas/partners-contacts-api/creation-batch-response';
import { ref as contactsCSVColumnsRef} from '../../components/schemas/partners-contacts-api/contacts-csv-columns';

const get: OperationObject = {
  description: "List all user's contacts batches",
  tags: ['Contacts API'],
  security: [],
  responses: {
    200: {
      description: 'List of contacts batches successfully listed',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: batchDetailsRef,
            },
          } as SchemaObject,
        },
      },
    } as ResponseObject,
  },
  default: {
    $ref: errorResponseRef,
  },
};

const post: OperationObject = {
  summary: 'Upload a batch of contacts',
  description: `
Uploads a CSV file to import a new batch of contacts.

### CSV Structure

For a successful import, the CSV file must strictly follow these rules:

* The first line of the file **must** contain the table header.
* Columns must be separated by a **semicolon (;)**.
* The columns must follow this exact predefined order:
    1.  \`externalPlatform\`
    2.  \`externalId\`
    3.  \`firstName\`
    4.  \`lastName\`
    5.  \`birthdate\`
    6.  \`email\`
    7.  \`mobile\`
    8.  \`landline\`
    9.  \`country\`
    10. \`zipcode\`
    11. \`state\`
    12. \`city\`
    13. \`address\`
    14. \`addressNumber\`
    15. \`neighborhood\`

### Important Validations

* The \`externalPlatform\`, \`externalId\`, \`firstName\`, and \`lastName\` fields are mandatory.
* It is mandatory to fill in at least one of the following fields: \`email\` or \`mobile\`.
* For any address information (\`zipcode\`, \`city\`, \`address\`, etc.) to be imported, the \`state\` field **must** be filled in. If \`state\` is invalid or empty, all other address fields will be discarded during the import.

For more details on the type and validations of each field, consult the \`ContactCSVColumns\` schema in the components section.
      `,
  tags: ['Contacts API'],
  security: [],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
              description:
                'Arquivo CSV a ser importado, contendo os dados dos contatos.',
            },
            'csv-structure': {
              $ref: contactsCSVColumnsRef,
            },
          },
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'Contacts batch created and ready for processing.',
      content: {
        'application/json': {
          type: 'object',
          schema: {
            $ref: batchCreationResponseRef,
          },
        },
      },
    },
  },
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
