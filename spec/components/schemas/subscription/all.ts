import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageSubscriptionRef } from './message';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageSubscriptionRef,
  }],
  discriminator: {
    propertyName: 'eventType',
    mapping: {
      MESSAGE: messageSubscriptionRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
