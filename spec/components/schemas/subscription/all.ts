import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageSubscriptionRef } from './message-subscription';
import { ref as messageStatusSubscriptionRef } from './message-status-subscription';
import { ref as conversationStatusSubscriptionRef } from './conversation-status-subscription';
import { ref as conversationMessageSubscriptionRef } from './conversation-message-subscription';
import { ref as supportExpertAgentEventRef } from './support-expert-agent-subscription';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageSubscriptionRef,
  }, {
    $ref: messageStatusSubscriptionRef,
  }, {
    $ref: conversationStatusSubscriptionRef,
  }, {
    $ref: conversationMessageSubscriptionRef,
  }],
  discriminator: {
    propertyName: 'eventType',
    mapping: {
      MESSAGE: messageSubscriptionRef,
      MESSAGE_STATUS: messageStatusSubscriptionRef,
      CONVERSATION_MESSAGE: conversationMessageSubscriptionRef,
      CONVERSATION_STATUS: conversationStatusSubscriptionRef,
      SUPPORT_EXPERT_AGENT: supportExpertAgentEventRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
