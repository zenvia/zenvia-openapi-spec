import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as recipientRef } from '../../components/schemas/two-fa/token/requests/code-resend';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  title: 'Resend code',
  description: 'Resend the code to the user',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: recipientRef,
        },
      },
    },
  },
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
};

export default path;
