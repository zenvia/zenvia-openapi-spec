import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactDataFieldRef } from '../../components/schemas/contacts/contact-custom-data-field';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';

const post: OperationObject = {
  summary: 'Create a new contact custom data field',
  description: 'Allows the creation of custom data fields to be used in the [contacts API](#tag/Contacts/paths/~1contacts/post).',
  tags: ['Contact Custom Data Fields'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: contactDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created contact custom data field',
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

const get: OperationObject = {
  summary: 'List contact data fields',
  description: 'Lists all contact custom data fields available.',
  tags: ['Contact Custom Data Fields'],
  parameters: [{
    $ref: pageRef,
  }, {
    $ref: sizeRef,
  }],
  responses: {
    200: {
      description: 'Contact custom data fields available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: contactDataFieldRef,
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
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
