import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as webhookSchemaRef } from '../../components/schemas/subscription/all';
import { ref as partialWebhookSchemaRef } from '../../components/schemas/subscription/partial-subscription';
import { ref as webhookIdRef } from '../../components/parameters/subscriptionId';
import { ref as errorResponseRef } from '../../components/responses/error';

const getOperation: OperationObject = {
  description: 'Retrieve one webhook by id',
  tags: ['Webhooks'],
  responses: {
    200: {
      description: 'Webhook Object',
      content: {
        'application/json': {
          schema: {
            $ref: webhookSchemaRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const updateOperation: OperationObject = {
  description: 'Update one webhook by id',
  tags: ['Webhooks'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: partialWebhookSchemaRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Webhook Object',
      content: {
        'application/json': {
          schema: {
            $ref: webhookSchemaRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const deleteOperation: OperationObject = {
  description: 'Delete one webhook by id',
  tags: ['Webhooks'],
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
  get: getOperation,
  delete: deleteOperation,
  patch: updateOperation,
  parameters: [{
    $ref: webhookIdRef,
  }],
};

export default path;
