import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as subscriptionSchemaRef } from '../../components/schemas/subscription/all';
import { ref as subscriptionIdRef } from '../../components/parameters/subscriptionId';

const getOperation: OperationObject = {
  description: 'Retrieve one subscription by id',
  tags: ['Subscriptions'],
  responses: {
    200: {
      description: 'Subscription Object',
      content: {
        'application/json': {
          schema: {
            $ref: subscriptionSchemaRef,
          },
        },
      },
    } as ResponseObject,
  } as ResponsesObject,
};

const updateOperation: OperationObject = {
  description: 'Update one subscription by id',
  tags: ['Subscriptions'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: subscriptionSchemaRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Subscription Object',
      content: {
        'application/json': {
          schema: {
            $ref: subscriptionSchemaRef,
          },
        },
      },
    } as ResponseObject,
  } as ResponsesObject,
};

const deleteOperation: OperationObject = {
  description: 'Delete one subscription by id',
  tags: ['Subscriptions'],
  responses: {
    204: {
      description: 'Subscription Object',
    } as ResponseObject,
  } as ResponsesObject,
};

const path: PathItemObject = {
  get: getOperation,
  delete: deleteOperation,
  put: updateOperation,
  parameters: [{
    $ref: subscriptionIdRef,
  }],
};

export default path;
