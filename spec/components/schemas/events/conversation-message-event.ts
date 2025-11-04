import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './base-conversation';
import { ref as messageProps } from './conversation-message/event-message-props';
import { ref as conversationProps } from './conversation-message/event-conversation-props';

const conversationMessageEvent: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseConversationRef },
    {
      type: 'object',
      properties: {
        message: {
          $ref: messageProps,
        },
        conversation: {
          $ref: conversationProps,
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default conversationMessageEvent;
