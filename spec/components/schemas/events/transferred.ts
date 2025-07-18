import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-status-base';

const transferred: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: { type: 'string', enum: ['CONVERSATION_TRANSFERRED'] },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef },
        {
          type: 'object',
          properties: {
            transferType: { type: 'string' },
            transferredBy: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                type: { type: 'string' }
              }
            },
            newUserId: { type: 'string' },
            newGroupId: { type: 'string' },
            previousUserId: { type: 'string' },
            previousGroupId: { type: 'string' }
          },
          required: ['transferType']
        }
      ],
      required: ['id', 'status', 'statusTimestamp']
    }
  }
};

export const ref = createComponentRef(__filename);
export default transferred;