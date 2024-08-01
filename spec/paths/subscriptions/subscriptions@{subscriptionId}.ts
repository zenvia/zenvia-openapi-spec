import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as subscriptionSchemaRef } from '../../components/schemas/subscription/all';
import { ref as subscriptionIdRef } from '../../components/parameters/subscriptionId';
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
            $ref: subscriptionSchemaRef,
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
  parameters: [{
    $ref: subscriptionIdRef,
  }],
};

export default path;
