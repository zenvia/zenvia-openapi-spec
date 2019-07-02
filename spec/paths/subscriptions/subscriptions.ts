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
  description: 'Create a new subscription',
  tags: ['Subscriptions'],
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
  description: 'List all subscriptions',
  tags: ['Subscriptions'],
  responses: {
    200: {
      description: 'Subscription Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: subscriptionSchemaRef,
            }
,          } as SchemaObject,
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
