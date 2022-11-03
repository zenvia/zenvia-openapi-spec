import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as toCodeRef } from '../../components/schemas/2fa/token/requests/code-verifiaction';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/2fa/token/responses/token';

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
      description: 'Returns Information about the configuration status after sending a code to the user',
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
