import { OperationObject, PathItemObject, ResponseObject, ResponsesObject, SchemaObject } from 'openapi3-ts';
import { ref as batchListResponseRef } from '../../components/schemas/partners-batches/batch-list-response';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as batchIdRef } from '../../components/parameters/batchId';

const get: OperationObject = {
  summary: 'Retrieve batch by id',
  description: 'Retrieve a product batch by its id.',
  tags: ['Product Batches'],
  security: [{
    TOKEN: [],
  }],
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
  parameters: [{
    $ref: batchIdRef,
  }],
};

export default path;
