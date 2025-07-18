import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageProp } from './message-prop';
import { ref as conversationProp } from './conversation-prop';

const conversationMessage: SchemaObject = {
  type: 'object',
  properties: {
    message: {
      $ref: messageProp,
    },
    conversation: {
      $ref: conversationProp,
    }
  }
};

export const ref = createComponentRef(__filename);
export default conversationMessage;
