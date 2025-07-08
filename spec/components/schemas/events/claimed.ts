import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
<<<<<<< HEAD
import { ref as baseConversationRef } from './conversation-status-base';
=======
import { ref as baseConversationRef } from './conversation-base';
>>>>>>> afd8253 (new conversion event subscription)

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
          },
          required: ['userId'],
        },
      ],
      required: ['id', 'status', 'statusTimestamp'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default claimed;
