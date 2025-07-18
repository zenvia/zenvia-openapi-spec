import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const conversationBase: SchemaObject = {
  type: 'object',
  description: 'Base structure for all conversation objects',
  properties: {
    id: { type: 'string' },
    status: {
      type: 'string',
      description: 'Current status of the conversation'
    },
    statusTimestamp: { type: 'string', format: 'date-time' },
    channel: { type: 'string', description: 'Channel where the conversation took place' },
    from: { type: 'string', description: 'Sender identifier' },
    to: { type: 'string', description: 'Receiver identifier' },
    contactId: { type: 'string' },
    groupId: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' }
  },
  required: ['id', 'status', 'statusTimestamp']
};

export const ref = createComponentRef(__filename);
export default conversationBase;