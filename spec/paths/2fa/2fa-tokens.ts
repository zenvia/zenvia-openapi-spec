import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenRef } from '../../components/schemas/two-fa/token/requests/token';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/two-fa/token/responses/token'

const post: OperationObject = {
  description: 'Send the generated code',
  tags: ['Two Factor authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: tokenRef,
        },
      },
    },
  },
  responses:{
    201: {
      description: 'Returns Information about the configuration staus after sending a code to the user',
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
};

export default path;
