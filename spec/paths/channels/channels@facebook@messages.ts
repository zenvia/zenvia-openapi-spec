import { PathItemObject, OperationObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Send a Facebook message',
  tags: ['Facebook'],
  responses: {
    200: {
      description: 'Message created',
    },
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
};

export default path;
