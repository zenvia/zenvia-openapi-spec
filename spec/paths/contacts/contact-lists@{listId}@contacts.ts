import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactRef } from '../../components/schemas/contacts-management/contact';
import { ref as listIdRef } from '../../components/parameters/contacts-management/listId';

const get: OperationObject = {
  summary: 'List the contacts in a list',
  description: 'Virtual collection to list the contacts in the list.',
  tags: ['Contact Lists'],
  responses: {
    200: {
      description: 'Contact IDs',
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
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of results available.',
            type: 'string',
            example: '100',
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
    $ref: listIdRef,
  }],
};

export default path;
