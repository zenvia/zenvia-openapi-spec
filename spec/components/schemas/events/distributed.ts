import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-status-base';

const distributed: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: { type: 'string', enum: ['CONVERSATION_DISTRIBUTED_TO_USER'] },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef },
        {
          type: 'object',
          properties: {
            groupId: { type: 'string' },
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
export default distributed;