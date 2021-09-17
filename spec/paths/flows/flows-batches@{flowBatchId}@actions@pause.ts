import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowBatchIdRef } from '../../components/parameters/flowBatchId';

const post: OperationObject = {
  description: 'Pause a flow batch',
  tags: ['Flows'],
  responses: {
    200: {
      description: 'Batch paused',
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
