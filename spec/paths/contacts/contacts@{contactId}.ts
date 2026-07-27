import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactRef } from '../../components/schemas/contacts-management/contact';
import { ref as contactIdRef } from '../../components/parameters/contacts-management/contactId';
import { ref as errorRef } from '../../components/schemas/error/base';

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
          allOf: [
            {
              $ref: contactRef,
            }, {
              type: 'object',
              oneOf: [
                {
                  type: 'object',
                  title: 'With channelList (preferred)',
                  required: ['channelList'],
                  not: { type: 'object', required: ['channels'] },
                },
                {
                  type: 'object',
                  title: 'With channels (deprecated)',
                  required: ['channels'],
                  not: { type: 'object', required: ['channelList'] },
                },
              ],
            },
          ],
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
    400: {
          description: 'Validation error. Returned when the request body is invalid',
          content: {
            'application/json': {
              schema: {
                $ref: errorRef,
              },
              examples: {
                mutuallyExclusiveFields: {
                  summary: 'channels and channelList sent together',
                  value: {
                    code: 'VALIDATION_ERROR',
                    message: 'Validation error',
                    'details': [
                      {
                        'code': 'MUTUALLY_EXCLUSIVE_FIELDS',
                        'path': 'channelList',
                        'message': "The fields 'channels' and 'channelList' cannot be used together. Note: 'channels' is deprecated, please migrate to 'channelList'.",
                      },
                    ],
                  },
                },
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
