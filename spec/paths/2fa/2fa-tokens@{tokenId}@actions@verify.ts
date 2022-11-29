import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenVerifyRef } from '../../components/schemas/2fa/token/requests/code';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/2fa/token/responses/token-verified';
import { ref as tokenIdRef } from '../../components/parameters/tokenId';

const post: OperationObject = {
  description: 'Verify a token using the token id',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: tokenVerifyRef,
        },
      },
    },
  },
  responses:{
    200: {
      description: 'Returns information about the configuration status after verifying a code sent by the user',
      content: {
        'application/json': {
          schema: {
            $ref: tokenResponseRef,
          },
        },
      },
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
