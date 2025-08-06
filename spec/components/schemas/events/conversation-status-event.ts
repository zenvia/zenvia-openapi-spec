import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as createdRef } from './created';
import { ref as claimedRef } from './claimed';
import { ref as transferredRef } from './transferred';
import { ref as distributedRef } from './distributed';
import { ref as snoozedRef } from './snoozed';
import { ref as closedRef } from './closed';
import { ref as baseRef } from './base';

const conversationStatusEvent: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    {
      type: 'object',
      properties: {
        type: {
          title: 'Event type',
          type: 'string',
          enum: [
            'CONVERSATION_CREATED',
            'CONVERSATION_QUEUED',
            'CONVERSATION_STARTED',
            'CONVERSATION_UNSNOOZED',
            'CONVERSATION_CLAIMED',
            'CONVERSATION_TRANSFERRED',
            'CONVERSATION_DISTRIBUTED_TO_USER',
            'CONVERSATION_SNOOZED',
            'CONVERSATION_CLOSED',
          ],
          example: 'CONVERSATION_CREATED',
        },
        conversation: {
          oneOf: [
            { $ref: createdRef },
            { $ref: claimedRef },
            { $ref: transferredRef },
            { $ref: distributedRef },
            { $ref: snoozedRef },
            { $ref: closedRef },
          ],
        },
      },
      required: ['type', 'conversation'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default conversationStatusEvent;
