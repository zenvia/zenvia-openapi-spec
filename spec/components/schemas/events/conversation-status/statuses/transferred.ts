import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';

const transferred: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_TRANSFERRED'],
        },
        transferType: {
          type: 'string',
          enum: ['TRANSFER_TO_USER', 'TRANSFER_TO_GROUP'],
          description: 'Type of transfer: to a user or to a group',
          example: 'TRANSFER_TO_USER',
        },
        transferredBy: {
          type: 'object',
          description: 'Details of who initiated the transfer',
          properties: {
            id: {
              type: 'string',
              description: 'ID of the entity that initiated the transfer',
              example: 'system',
            },
            type: {
              type: 'string',
              enum: ['USER', 'SYSTEM'],
              description: 'Type of entity that initiated the transfer',
              example: 'SYSTEM',
            },
          },
          required: ['id', 'type'],
        },
        newUserId: {
          type: 'string',
          description: 'ID of the new user to whom the conversation was transferred',
          example: '6786977532d02e8004b485c2',
        },
        newGroupId: {
          type: 'string',
          description: 'ID of the new group to which the conversation was transferred',
          example: '682f96fdf93dac82cc325a20',
        },
        previousUserId: {
          type: 'string',
          description: 'ID of the previous user who handled the conversation',
          example: '6786977532d02e8004b485c2',
        },
        previousGroupId: {
          type: 'string',
          description: 'ID of the previous group that handled the conversation',
          example: '65eb71c89b8c5f8fecd48d88',
        },
      },
      required: ['transferType', 'transferredBy'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default transferred;
