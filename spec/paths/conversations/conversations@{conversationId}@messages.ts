import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as messageSchemaRef } from '../../components/schemas/conversations/message';
import { ref as sendMessageRequestRef } from '../../components/schemas/conversations/send-message-request';
import { ref as conversationId } from '../../components/parameters/conversations/conversationId';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Send an outbound message on the conversation, as the acting agent. Fails with SESSION_REQUIRED when there is no active messaging session with the contact.',
  tags: ['Conversations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: sendMessageRequestRef,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Message sent',
      content: {
        'application/json': {
          schema: {
            $ref: messageSchemaRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  parameters: [{
    $ref: conversationId,
  }],
};

export default path;
