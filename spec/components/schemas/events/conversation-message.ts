import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageProp } from './message-prop';
import { ref as conversationProp } from './conversation-prop';
import { ref as baseConversationRef } from './base-conversation-message';

const conversationMessage: SchemaObject = {
  type: 'object',
  allOf: [{
      $ref: baseConversationRef,
    },
    {
      type: 'object',
      properties: {
        message: {
          $ref: messageProp,
        },
        conversation: {
          $ref: conversationProp,
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default conversationMessage;
