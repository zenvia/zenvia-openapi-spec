import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenVerifyRef } from '../../components/schemas/2fa/token/requests/code';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/2fa/token/responses/token';
import { ref as configurationIdRef } from '../../components/parameters/configurationId'

const post: OperationObject = {
  description: 'Verify a token using the configuration id',
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
      description: 'Returns Information about the configuration status after sending a code to the user',
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
    $ref: configurationIdRef,
  }],
};

export default path;
