import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as voiceMessageRef } from '../../components/schemas/message/voice';

const post: OperationObject = {
  description: 'Send a Voice message',
  tags: ['Voice'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: voiceMessageRef,
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
            $ref: voiceMessageRef,
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
