import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as messageSchemaRef } from '../../components/schemas/conversations/message';
import { ref as sendNoteRequestRef } from '../../components/schemas/conversations/send-note-request';
import { ref as conversationId } from '../../components/parameters/conversations/conversationId';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  // tslint:disable-next-line: max-line-length
  description: 'Add an internal note to the conversation. A note is a message with direction INTERNAL, never delivered to the contact.',
  tags: ['Conversations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: sendNoteRequestRef,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Note added',
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
