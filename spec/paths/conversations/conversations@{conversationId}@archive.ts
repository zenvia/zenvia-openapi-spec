import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as archiveRequestRef } from '../../components/schemas/conversations/archive-request';
import { ref as conversationId } from '../../components/parameters/conversations/conversationId';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Archive (close) the conversation with the given close reason.',
  tags: ['Conversations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: archiveRequestRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Conversation archived',
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
