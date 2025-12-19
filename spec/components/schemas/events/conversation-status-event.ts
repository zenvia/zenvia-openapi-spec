import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './base-conversation';
import { ref as conversationPropsRef } from './conversation-status/event-conversation-props';

const conversationStatusEvent: SchemaObject = {
  allOf: [
    { $ref: baseConversationRef },
    {
      type: 'object',
      properties: {
        conversation: {
          $ref: conversationPropsRef,
        },
      },
      required: ['conversation'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default conversationStatusEvent;
