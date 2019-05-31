import { PathItemObject, OperationObject, CallbackObject, SchemaObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as subscriptionSchemaRef } from '../../components/schemas/subscription/all';
import { ref as sentMessageSchemaRef } from '../../components/schemas/message/whatsapp/sent';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a new subscription',
  tags: ['Subscriptions'],
  responses: {
    200: {
      description: 'Created subscription',
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
    onMessage: {
      '/webhook': {
        post: {
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: sentMessageSchemaRef,
                },
              },
            },
          },
          responses: {
            200: {
              description: 'webhook successfully processed and no retries will be performed',
            },
          },
        },
      } as PathItemObject,
    } as CallbackObject,
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
  get,
  post,
};

export default path;
