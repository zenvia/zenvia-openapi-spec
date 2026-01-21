import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as claimedRef } from './statuses/claimed';
import { ref as closedRef } from './statuses/closed';
import { ref as createdRef } from './statuses/created';
import { ref as distributedRef } from './statuses/distributed';
import { ref as queuedRef } from './statuses/queued';
import { ref as snoozedRef } from './statuses/snoozed';
import { ref as startedRef } from './statuses/started';
import { ref as transferredRef } from './statuses/transferred';

const conversationStatusEventConversationProps: SchemaObject = {
  title: 'Conversation Status Event Conversation Object',
  description: 'Properties of the conversation object for status events',
  oneOf: [
    { $ref: transferredRef },
    { $ref: startedRef },
    { $ref: snoozedRef },
    { $ref: queuedRef },
    { $ref: distributedRef },
    { $ref: createdRef },
    { $ref: closedRef },
    { $ref: claimedRef },
  ],
  discriminator: {
    propertyName: 'status',
    mapping: {
      CONVERSATION_TRANSFERRED: transferredRef,
      CONVERSATION_STARTED: startedRef,
      CONVERSATION_SNOOZED: snoozedRef,
      CONVERSATION_QUEUED: queuedRef,
      CONVERSATION_DISTRIBUTED_TO_USER: distributedRef,
      CONVERSATION_CREATED: createdRef,
      CONVERSATION_CLOSED: closedRef,
      CONVERSATION_CLAIMED: claimedRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default conversationStatusEventConversationProps;
