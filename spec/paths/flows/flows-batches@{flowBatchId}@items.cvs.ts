import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowBatchIdRef } from '../../components/parameters/flowBatchId';

const get: OperationObject = {
  description: 'Get file of flow batch',
  tags: ['Flows'],
  parameters: [{
    $ref: flowBatchIdRef,
  }],
  responses: {
    200: {
      description: 'File found as cvs file',
      content: {
        'text/cvs': {},
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
