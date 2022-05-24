import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactDataFieldRef } from '../../components/schemas/contacts/contact-data-field';
import { ref as contactDataFieldIdRef } from '../../components/parameters/contacts/fieldId';

const get: OperationObject = {
  summary: 'Retrieve a contact data field by id',
  description: 'Allows to retrieve a contact data field information.',
  tags: ['Contact Data Fields'],
  responses: {
    200: {
      description: 'Contact data field object',
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
