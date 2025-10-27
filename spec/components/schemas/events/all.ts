import { SchemaObject } from 'openapi3-ts';
import { ref as messageEventRef } from './message-event';
import { ref as messageStatusEventRef } from './message-status-event';
import { ref as conversationMessageEventRef } from './conversation-message-event';
import { ref as conversationStatusEventRef } from './conversation-status-event';
import { ref as supportExpertAgentEventRef } from './support-expert-agent-event';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageEventRef,
  }, {
    $ref: messageStatusEventRef,
  }, {
    $ref: conversationMessageEventRef,
  }, {
    $ref: conversationStatusEventRef,
  }, {
    $ref: supportExpertAgentEventRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      MESSAGE: messageEventRef,
      MESSAGE_STATUS: messageStatusEventRef,
      CONVERSATION_STATUS: conversationStatusEventRef,
      CONVERSATION_MESSAGE: conversationMessageEventRef,
      SUPPORT_EXPERT_AGENT: supportExpertAgentEventRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
