import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as facebookMessageRef } from '../../components/schemas/message/facebook';

const post: OperationObject = {
  description: 'Send a Facebook message',
  tags: ['Facebook'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: facebookMessageRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created message',
      content: {
        'application/json': {
          schema: {
            $ref: facebookMessageRef,
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
