import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as subscriptionSchemaRef } from '../../components/schemas/subscription/all';
import { ref as notificationCallbackRef } from '../../components/callbacks/subscription-event';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a new webhook',
  tags: ['Webhooks'],
  responses: {
    200: {
      description: 'Created subscription',
      content: {
        'application/json': {
          schema: {
            $ref: subscriptionSchemaRef,
          },
        },
      },
    },
    default: {
      $ref: errorResponseRef,
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: subscriptionSchemaRef,
        },
      },
    },
  },
  callbacks: {
    onEvent: {
      $ref: notificationCallbackRef,
    },
  },
};

const get: OperationObject = {
  description: 'List all webhooks',
  tags: ['Webhooks'],
  responses: {
    200: {
      description: 'Webhook Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: subscriptionSchemaRef,
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
