import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';

const snoozed: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_SNOOZED'],
        },
        snoozedUntil: {
          type: 'string',
          format: 'date-time',
          description: 'Timestamp until the conversation is snoozed',
          example: '2025-06-23T17:43:00.396Z',
        },
      },
      required: ['snoozedUntil'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default snoozed;
