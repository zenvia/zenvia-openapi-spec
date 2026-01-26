import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as channelRef } from '../message/channel';
import { createComponentRef } from '../../../../utils/ref';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [
    {
      $ref: baseRef,
    },
    {
      type: 'object',
      properties: {
        eventType: {
          type: 'string',
          enum: ['CONVERSATION_MESSAGE'],
        },
        criteria: {
          type: 'object',
          properties: {
            channel: {
              $ref: channelRef,
            },
            direction: {
              title: 'Message direction',
              description: 'Indicates whether the message is received from a channel (IN), sent to a channel (OUT) or sent internally (INTERNAL)',
              type: 'string',
              enum: ['IN', 'OUT', 'INTERNAL'],
            },
          },
          required: ['channel', 'direction'],
        },
      },
      required: ['eventType', 'criteria'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default subscription;
