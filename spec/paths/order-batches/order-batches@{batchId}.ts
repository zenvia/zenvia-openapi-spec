import { OperationObject, PathItemObject, ResponseObject, ResponsesObject, SchemaObject } from 'openapi3-ts';
import { ref as batchListResponseRef } from '../../components/schemas/order-batches/batch-list-response';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  summary: 'Retrieve batch by id',
  description: 'Retrieve a order batch by its id.',
  tags: ['Order Batches'],
  responses: {
    200: {
      description: 'Batch retrieved successfully.',
      content: {
        'application/json': {
          schema: {
            $ref: batchListResponseRef,
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
  get,
};

export default path;
