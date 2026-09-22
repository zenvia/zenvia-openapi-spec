import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const message: SchemaObject = {
  title: 'Message',
  description: 'A message exchanged on a conversation. A note is a message with direction INTERNAL, never delivered to the contact.',
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'The message identifier.',
      type: 'string',
      readOnly: true,
    },
    from: {
      title: 'From',
      description: 'The channel address the message was sent from.',
      type: 'string',
      readOnly: true,
    },
    to: {
      title: 'To',
      description: 'The channel address the message was sent to.',
      type: 'string',
      readOnly: true,
    },
    direction: {
      title: 'Direction',
      description: 'IN for a message received from the contact, OUT for a message sent to the contact, INTERNAL for a note visible only to agents.',
      type: 'string',
      enum: ['IN', 'OUT', 'INTERNAL'],
      readOnly: true,
      example: 'OUT',
    },
    channel: {
      title: 'Channel',
      description: 'The channel the message was exchanged on.',
      type: 'string',
      enum: [
        'whatsapp', 'sms', 'facebook', 'rcs', 'telegram', 'voice', 'gbm', 'instagram', 'email', 'webchat',
      ],
      readOnly: true,
    },
    contents: {
      title: 'Contents',
      description: 'The message content items.',
      type: 'array',
      readOnly: true,
      items: {
        type: 'object',
        properties: {
          type: {
            title: 'Type',
            type: 'string',
            enum: ['text', 'template', 'file', 'location', 'note'],
          },
          payload: {
            title: 'Payload',
            description: 'The content payload, shaped according to type.',
            type: 'object',
          },
        },
        required: ['type'],
      },
    },
    timestamp: {
      title: 'Timestamp',
      description: 'The date and time the message was created, in ISO 8601 format.',
      type: 'string',
      format: 'date-time',
      readOnly: true,
    },
  },
  required: [
    'id',
    'direction',
    'channel',
    'contents',
    'timestamp',
  ],
};

export const ref = createComponentRef(__filename);
export default message;
