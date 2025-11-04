import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';

const claimed: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_CLAIMED'],
        },
        userId: {
          type: 'string',
          description: 'ID of the user who claimed the conversation',
        },
      },
      required: ['userId'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default claimed;
