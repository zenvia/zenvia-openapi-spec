import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const conversation: SchemaObject = {
  title: 'Conversation',
  description: 'A conversation between an agent (or bot) and a contact on an NCA (Novo Conceito de Atendimento) account.',
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'The conversation identifier.',
      type: 'string',
      readOnly: true,
    },
    status: {
      title: 'Status',
      description: 'The current status of the conversation.',
      type: 'string',
      enum: [
        'CONVERSATION_CREATED', 'QUEUED', 'STARTED', 'CLAIMED',
        'DISTRIBUTED_TO_USER', 'TRANSFERRED', 'SNOOZED', 'UNSNOOZED', 'CLOSED',
      ],
      readOnly: true,
      example: 'STARTED',
    },
    statusTimestamp: {
      title: 'Status timestamp',
      description: 'The date and time of the last status change, in ISO 8601 format.',
      type: 'string',
      format: 'date-time',
      readOnly: true,
    },
    channel: {
      title: 'Channel',
      description: 'The channel the conversation is happening on.',
      type: 'string',
      enum: [
        'whatsapp', 'sms', 'facebook', 'rcs', 'telegram', 'voice', 'gbm', 'instagram', 'email', 'webchat',
      ],
      readOnly: true,
    },
    to: {
      title: 'To',
      description: "The contact's channel address.",
      type: 'string',
      readOnly: true,
    },
    from: {
      title: 'From',
      description: 'The channel address the conversation is being served from.',
      type: 'string',
      readOnly: true,
    },
    contactId: {
      title: 'Contact id',
      description: 'The identifier of the linked contact, when there is one. The webchat channel may open a conversation without a linked contact.',
      type: 'string',
      readOnly: true,
    },
    groupId: {
      title: 'Group id',
      description: 'The identifier of the group currently assigned to the conversation.',
      type: 'string',
      readOnly: true,
    },
    userId: {
      title: 'User id',
      description: 'The identifier of the agent currently assigned to the conversation.',
      type: 'string',
      readOnly: true,
    },
    createdAt: {
      title: 'Created at',
      description: 'The date and time the conversation was created, in ISO 8601 format.',
      type: 'string',
      format: 'date-time',
      readOnly: true,
    },
  },
  required: [
    'id',
    'status',
    'statusTimestamp',
    'channel',
  ],
};

export const ref = createComponentRef(__filename);
export default conversation;
