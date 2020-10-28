import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as rcsMessageRef } from '../../components/schemas/message/rcs';

const post: OperationObject = {
  description: 'Send a RCS message',
  tags: ['RCS'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: rcsMessageRef,
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
            $ref: rcsMessageRef,
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
