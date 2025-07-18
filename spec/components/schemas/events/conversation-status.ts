import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as createdRef } from './created';
import { ref as claimedRef } from './claimed';
import { ref as transferredRef } from './transferred';
import { ref as distributedRef } from './distributed';
import { ref as snoozedRef } from './snoozed';
import { ref as closedRef } from './closed';

const conversationStatus: SchemaObject = {
  additionalProperties: true,
  oneOf: [
    { $ref: createdRef },
    { $ref: claimedRef },
    { $ref: transferredRef },
    { $ref: distributedRef },
    { $ref: snoozedRef },
    { $ref: closedRef }
  ],
  discriminator: {
    propertyName: 'type',
    mapping: {
      CONVERSATION_CREATED: createdRef,
      CONVERSATION_QUEUED: createdRef,
      CONVERSATION_STARTED: createdRef,
      CONVERSATION_UNSNOOZED: createdRef,
      CONVERSATION_CLAIMED: claimedRef,
      CONVERSATION_TRANSFERRED: transferredRef,
      CONVERSATION_DISTRIBUTED_TO_USER: distributedRef,
      CONVERSATION_SNOOZED: snoozedRef,
      CONVERSATION_CLOSED: closedRef
    }
  }
};

export const ref = createComponentRef(__filename);
export default conversationStatus;
