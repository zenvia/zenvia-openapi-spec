import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
