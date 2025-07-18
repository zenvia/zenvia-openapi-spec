import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './conversation-status-base';

const created: SchemaObject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    timestamp: { type: 'string', format: 'date-time' },
    type: {
      type: 'string',
      enum: ['CONVERSATION_CREATED', 'CONVERSATION_QUEUED', 'CONVERSATION_STARTED', 'CONVERSATION_UNSNOOZED']
    },
    subscriptionId: { type: 'string' },
    conversation: {
      allOf: [
        { $ref: baseConversationRef }
      ],
      required: ['id', 'status', 'statusTimestamp']
    }
  }
};

export const ref = createComponentRef(__filename);
export default created;