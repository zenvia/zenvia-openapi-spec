import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as toCodeRef } from '../../components/schemas/2fa/token/requests/recipient';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/2fa/token/responses/token-verified';

const post: OperationObject = {
  description: 'Verify a token',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: toCodeRef,
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
    }  as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
};

export default path;
