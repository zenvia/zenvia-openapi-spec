import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Object',
  description: 'This is a Message object model',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      type: 'string',
    },
    from: {
      title: 'from',
      type: 'string',
    },
    to: {
      title: 'to',
      type: 'string',
    },
    direction: {
      title: 'Message Direction',
      description: `Indicates whether the message is received from a channel (IN), sent to a channel (OUT), or is internal (INTERNAL).
                    > **Note:** The **OUT** direction is under construction.`,
      type: 'string',
      enum: ['IN', 'OUT', 'INTERNAL'],
    },
    channel: {
      title: 'Channel',
      description: 'Channel information including type and provider',
      type: 'object',
      properties: {
        type: {
          type: 'string',
        },
        provider: {
          type: 'string',
        },
      },
      required: ['type', 'provider'],
    },
    contents: {
      title: 'Message contents',
      description: 'An array of message content objects',
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: true,
      },
    },
    timestamp: {
      title: 'Timestamp',
      type: 'string',
      format: 'date-time',
    },
  },
  required: ['id', 'to', 'direction', 'channel', 'timestamp'],
};

export const ref = createComponentRef(__filename);
export default base;
