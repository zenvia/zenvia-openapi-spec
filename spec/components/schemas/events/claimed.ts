import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-status-base';

const claimed: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: { type: 'string', enum: ['CONVERSATION_CLAIMED'] },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef },
        {
          type: 'object',
          properties: {
            userId: { type: 'string' },
            id: { type: 'string' },
            status: { type: 'string' },
            statusTimestamp: { type: 'string' },
          },
          required: ['userId', 'id', 'status', 'statusTimestamp'],
        },
      ],
    },

  },
};

export const ref = createComponentRef(__filename);
export default claimed;
