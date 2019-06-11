import { SchemaObject } from 'openapi3-ts';
import { ref as messageEventRef } from './message-event';
import { ref as messageStatusEventRef } from './message-status-event';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: messageEventRef,
  }, {
    $ref: messageStatusEventRef,
  }, {
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      MESSAGE: messageEventRef,
      MESSAGE_STATUS: messageStatusEventRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
