import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as templateSchemaRef } from '../../components/schemas/templates/template';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a new',
  tags: ['Templates'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: templateSchemaRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created template',
      content: {
        'application/json': {
          schema: {
            $ref: templateSchemaRef,
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const get: OperationObject = {
  description: 'List all templates',
  tags: ['Templates'],
  parameters: [{
    name: 'channel',
    in: 'query',
    description: 'Filter by channel',
    allowEmptyValue: false,
    schema: {
      type: 'string',
      enum: [
        'WHATSAPP',
      ],
    },
    example: 'WHATSAPP',
  }, {
    name: 'senderId',
    in: 'query',
    description: 'Filter by senderId',
    allowEmptyValue: false,
    schema: {
      type: 'string',
    },
    example: 'b5agf1-y237-11e8-b127-1230f6c2d98m',
  }, {
    name: 'status',
    in: 'query',
    description: 'Filter by status',
    allowEmptyValue: false,
    schema: {
      type: 'string',
      enum: [
        'WAITING_REVIEW',
        'REJECTED',
        'WAITING_APPROVAL',
        'APPROVED',
      ],
    },
    example: 'APPROVED',
  }],
  responses: {
    200: {
      description: 'Template Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: templateSchemaRef,
            },
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
