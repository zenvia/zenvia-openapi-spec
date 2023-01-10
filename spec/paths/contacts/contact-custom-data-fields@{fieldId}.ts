/* import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactDataFieldRef } from '../../components/schemas/contacts/contact-custom-data-field';
import { ref as contactDataFieldIdRef } from '../../components/parameters/contacts/fieldId';

const get: OperationObject = {
  summary: 'Retrieve a contact custom data field by id',
  description: 'Allows to retrieve a contact custom data field information.',
  tags: ['Contact Custom Data Fields'],
  responses: {
    200: {
      description: 'Contact custom data field object',
      content: {
        'application/json': {
          schema: {
            $ref: contactDataFieldRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  parameters: [{
    $ref: contactDataFieldIdRef,
  }],
};

export default path;
*/
