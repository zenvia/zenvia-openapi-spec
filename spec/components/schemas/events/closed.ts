import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-status-base';

const closed: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: { type: 'string', enum: ['CONVERSATION_CLOSED'] },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef },
        {
          type: 'object',
          properties: {
            closedBy: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                type: { type: 'string' },
              },
            },
            closeReason: {
              type: 'object',
              properties: {
                key: { type: 'string' },
                name: { type: 'string' },
              },
            },
          },
        },
      ],
      required: ['id', 'status', 'statusTimestamp'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default closed;