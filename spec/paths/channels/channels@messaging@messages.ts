import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as messagingMessageRef } from '../../components/schemas/message/messaging';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Send a message',
  tags: ['Messaging'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: messagingMessageRef,
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
            $ref: messagingMessageRef,
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
