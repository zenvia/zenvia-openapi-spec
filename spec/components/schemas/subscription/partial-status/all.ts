import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as messageSubscriptionRef } from './message-subscription';
import { ref as messageStatusSubscriptionRef } from './message-status-subscription';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageSubscriptionRef,
  }, {
    $ref: messageStatusSubscriptionRef,
  }],
  discriminator: {
    propertyName: 'eventType',
    mapping: {
      MESSAGE: messageSubscriptionRef,
      MESSAGE_STATUS: messageStatusSubscriptionRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
