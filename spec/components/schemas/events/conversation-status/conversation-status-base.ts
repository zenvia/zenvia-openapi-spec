
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const conversationStatusBase: SchemaObject = {
  title: 'Conversation Object Base',
  description: 'Common properties for all conversation status objects',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Unique identifier for the conversation',
      example: '685c69b69a748946440259e8',
    },
    status: {
      type: 'string',
      description: 'Status of the conversation',
    },
    statusTimestamp: {
      type: 'string',
      format: 'date-time',
      description: 'Timestamp when the status was set',
      example: '2025-06-25T21:15:47.955Z',
    },
    channel: {
      type: 'string',
      description: 'Channel of the conversation',
      example: 'whatsapp',
    },
    from: {
      type: 'string',
      description: 'Sender identifier',
      example: '5521986727034',
    },
    to: {
      type: 'string',
      description: 'Recipient identifier',
      example: '551151963226',
    },
    contactId: {
      type: 'string',
      description: 'Identifier of the contact associated with the conversation',
      example: '876e9b09-4726-44c9-8202-a9b161b7a548',
    },
    groupId: {
      type: 'string',
      description: 'Identifier of the group associated with the conversation',
      example: '65eb71c89b8c5f8fecd48d88',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Timestamp when the conversation was created',
      example: '2025-06-25T21:27:17.699Z',
    },
  },
  required: [
    'id',
    'status',
    'statusTimestamp',
    'channel',
    'from',
    'to',
    'contactId',
    'groupId',
    'createdAt',
  ],
};

export const ref = createComponentRef(__filename);
export default conversationStatusBase;
