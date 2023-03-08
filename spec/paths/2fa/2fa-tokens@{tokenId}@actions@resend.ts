import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenIdRef } from '../../components/parameters/tokenId';

const post: OperationObject = {
  description: 'Resend the token by token id',
  tags: ['Two Factor Authentication'],
  responses:{
    204: {
      description: 'No content',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
  parameters: [{
    $ref: tokenIdRef,
  }],
};

export default path;
