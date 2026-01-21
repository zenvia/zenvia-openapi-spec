import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';

const distributed: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_DISTRIBUTED_TO_USER'],
        },
        groupId: {
          type: 'string',
          description: 'Identifier of the group associated with the conversation',
          example: '65eb71c89b8c5f8fecd48d88',
        },
        userId: {
          type: 'string',
          description: 'ID of the user to whom the conversation was distributed',
          example: '6786977532d02e8004b485c2',
        },
      },
      required: ['groupId', 'userId'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default distributed;
