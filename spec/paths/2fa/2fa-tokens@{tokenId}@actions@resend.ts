import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenIdRef } from '../../components/parameters/tokenId';

const post: OperationObject = {
  description: 'Resend the code using the configuration id',
  tags: ['Two Factor Authentication'],
  responses:{
    204: {
      description: 'Return the code status to indicate success',
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
