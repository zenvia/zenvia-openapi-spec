import { SchemaObject } from 'openapi3-ts';
import { ref as callRef } from '../call';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'Voice',
  oneOf: [{
    $ref: callRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      call: callRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
