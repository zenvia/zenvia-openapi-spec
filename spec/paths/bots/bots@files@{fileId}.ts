import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as fileIdRef } from '../../components/parameters/fileId';

const get: OperationObject = {
  description: 'Get file of dispatch a bot',
  tags: ['Bots'],
  responses: {
    200: {
      description: 'File found',
      content: {
        'text/cvs': {},
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    }
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  parameters: [{
    $ref: fileIdRef,
  }],
};

export default path;
