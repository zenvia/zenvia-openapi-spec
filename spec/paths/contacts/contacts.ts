import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactRef } from '../../components/schemas/contacts/contact';
import { ref as listNamesRef } from '../../components/parameters/contacts/listNames';

const post: OperationObject = {
  summary: 'Create a new contact',
  description: 'Allows the creation of contacts.',
  tags: ['Contacts'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          allOf: [
            {
              $ref: contactRef,
            }, {
              type: 'object',
              required: ['channels'],
            },
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Contact created',
      content: {
        'application/json': {
          schema: {
            $ref: contactRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const get: OperationObject = {
  summary: 'List contacts',
  description: 'Lists all contacts available',
  tags: ['Contacts'],
  parameters: [{
    $ref: listNamesRef,
  }],
  responses: {
    200: {
      description: 'Contacts available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: contactRef,
            },
          },
        },
      },
    } as ResponseObject,
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
