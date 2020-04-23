import {
  PathItemObject,
  OperationObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as templateIdRef } from '../../components/parameters/templateId';
import { ref as templateCommentIdRef } from '../../components/parameters/templateCommentId';
import { ref as errorResponseRef } from '../../components/responses/error';

const deleteOperation: OperationObject = {
  description: 'Delete comment by id',
  tags: ['Templates'],
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
  delete: deleteOperation,
  parameters: [{
    $ref: templateIdRef,
  }, {
    $ref: templateCommentIdRef,
  }],
};

export default path;
