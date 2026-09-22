import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as transferRequestRef } from '../../components/schemas/conversations/transfer-request';
import { ref as conversationSchemaRef } from '../../components/schemas/conversations/conversation';
import { ref as conversationId } from '../../components/parameters/conversations/conversationId';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  // tslint:disable-next-line: max-line-length
  description: 'Transfer the conversation to a user or a group. Transferring to a user is synchronous and answers 200; transferring to a group answers 202 and the conversation is queued for distribution.',
  tags: ['Conversations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: transferRequestRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Conversation transferred to a user',
    } as ResponseObject,
    202: {
      description: 'Conversation transferred to a group and queued for distribution',
      content: {
        'application/json': {
          schema: {
            $ref: conversationSchemaRef,
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
