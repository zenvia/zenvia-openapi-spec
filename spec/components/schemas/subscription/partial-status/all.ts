import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as messageSubscriptionRef } from './message-subscription';
import { ref as messageStatusSubscriptionRef } from './message-status-subscription';
import { ref as conversationStatusSubscriptionRef } from './conversation-status-subscription';
import { ref as conversationMessageSubscriptionRef } from './conversation-message-subscription';
import { ref as supportExpertAgentSubscriptionRef } from './support-expert-agent-subscription';
import { ref as contactSubscriptionRef } from './contact-subscription';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageSubscriptionRef,
  }, {
    $ref: messageStatusSubscriptionRef,
  }, {
    $ref: conversationStatusSubscriptionRef,
  }, {
    $ref: conversationMessageSubscriptionRef,
  }, {
    $ref: supportExpertAgentSubscriptionRef,
  }, {
    $ref: contactSubscriptionRef,
  }],
  discriminator: {
    propertyName: 'eventType',
    mapping: {
      MESSAGE: messageSubscriptionRef,
      MESSAGE_STATUS: messageStatusSubscriptionRef,
      CONVERSATION_STATUS: conversationStatusSubscriptionRef,
      CONVERSATION_MESSAGE: conversationMessageSubscriptionRef,
      SUPPORT_EXPERT_AGENT: supportExpertAgentSubscriptionRef,
      CONTACT: contactSubscriptionRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
