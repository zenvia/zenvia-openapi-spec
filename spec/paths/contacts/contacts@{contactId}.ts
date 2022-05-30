import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactRef } from '../../components/schemas/contacts/contact';
import { ref as contactIdRef } from '../../components/parameters/contacts/contactId';

const get: OperationObject = {
  summary: 'Retrieve one contact by id',
  description: 'Allows to retrieve a contact\'s information.',
  tags: ['Contacts'],
  responses: {
    200: {
      description: 'Contact object',
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
  } as ResponsesObject,
};

const patch: OperationObject = {
  summary: 'Update one contact by id',
  description: 'Allows to update a contact\'s information.',
  tags: ['Contacts'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: contactRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated contact',
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
  } as ResponsesObject,
};

const del: OperationObject = {
  summary: 'Delete one contact by id',
  description: 'Allows to delete a contact.',
  tags: ['Contacts'],
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
    $ref: contactIdRef,
  }],
};

export default path;
