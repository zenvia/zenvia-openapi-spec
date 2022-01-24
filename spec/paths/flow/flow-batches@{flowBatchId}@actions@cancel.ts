import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowBatchIdRef } from '../../components/parameters/flowBatchId';

const post: OperationObject = {
  description: 'Cancel a flow batch',
  tags: ['Flow Batches'],
  responses: {
    204: {
      description: 'Flow batch canceled',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  parameters: [{
    $ref: flowBatchIdRef,
  }],
};

export default path;
