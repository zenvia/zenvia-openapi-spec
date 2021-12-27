import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowsBatchStatusRef } from '../../components/schemas/flows/batch/status';
import { ref as flowBatchIdRef } from '../../components/parameters/flowBatchId';

const get: OperationObject = {
  description: 'Retrieve one batch by id',
  tags: ['Flow Batches'],
  parameters: [{
    $ref: flowBatchIdRef,
  }],
  responses: {
    200: {
      description: 'Flow Batch found',
      content: {
        'application/json': {
          schema: {
            $ref: flowsBatchStatusRef,
          },
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
