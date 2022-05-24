import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactListRef } from '../../components/schemas/contacts/contact-list';
import { ref as listIdRef } from '../../components/parameters/contacts/listId';

const get: OperationObject = {
  summary: 'Retrieve one contact list by id',
  description: 'Allows to retrieve a contact list\'s information.',
  tags: ['Contact Lists'],
  responses: {
    200: {
      description: 'Contact object',
      content: {
        'application/json': {
          schema: {
            $ref: contactListRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const patch: OperationObject = {
  summary: 'Update one contact list by id',
  description: 'Allows to update a contact list\'s information.',
  tags: ['Contact Lists'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: contactListRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated contact list',
      content: {
        'application/json': {
          schema: {
            $ref: contactListRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const del: OperationObject = {
  summary: 'Delete one contact list by id',
  description: 'Allows to delete a contact list. Only the list is deleted, not the contacts.',
  tags: ['Contact Lists'],
  responses: {
    204: {
      description: 'No content',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  patch,
  delete: del,
  parameters: [{
    $ref: listIdRef,
  }],
};

export default path;
