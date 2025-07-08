import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-base';

const snoozed: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: { type: 'string', enum: ['CONVERSATION_SNOOZED'] },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef },
        {
          type: 'object',
          properties: {
            snoozedUntil: { type: 'string', format: 'date-time' }
          },
          required: ['snoozedUntil']
        }
      ],
      required: ['id', 'status', 'statusTimestamp']
    }
  }
};

export const ref = createComponentRef(__filename);
export default snoozed;