import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';

const closed: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_CLOSED'],
        },
        closedBy: {
          type: 'object',
          description: 'Details of who closed the conversation',
          properties: {
            id: {
              type: 'string',
              description: 'ID of the entity that closed the conversation',
              example: '6786977532d02e8004b485c2',
            },
            type: {
              type: 'string',
              enum: ['USER', 'SYSTEM'],
              description: 'Type of entity that closed the conversation',
              example: 'USER',
            },
          },
          required: ['id', 'type'],
        },
        closeReason: {
          type: 'object',
          description: 'Reason for closing the conversation',
          properties: {
            key: {
              type: 'string',
              description: 'Key representing the reason for closing',
              example: 'notInterested',
            },
            name: {
              type: 'string',
              description: 'Human-readable name of the reason for closing',
              example: 'No Longer Interested',
            },
          },
          required: ['key', 'name'],
        },
      },
      required: ['closedBy', 'closeReason'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default closed;
