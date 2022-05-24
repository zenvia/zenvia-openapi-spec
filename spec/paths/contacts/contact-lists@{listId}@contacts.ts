import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactIdRef } from '../../components/schemas/contacts/contact-id';
import { ref as listIdRef } from '../../components/parameters/contacts/listId';

const get: OperationObject = {
  summary: 'List the contacts in a list',
  description: 'Lists the ids of the contacts in the list by id.',
  tags: ['Contact Lists'],
  responses: {
    200: {
      description: 'Contact IDs',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: contactIdRef,
            },
          },
          example: ['contact-id1', 'contact-id2', 'contact-id3'],
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const post: OperationObject = {
  summary: 'Add contact to a list',
  description: 'Allows to add one contact to a list by id.',
  tags: ['Contact Lists'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: contactIdRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Contact added to the list',
      content: {
        'application/json': {
          schema: {
            $ref: contactIdRef,
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
  post,
  parameters: [{
    $ref: listIdRef,
  }],
};

export default path;
