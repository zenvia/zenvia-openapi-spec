import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as cardRef } from '../card';
import { ref as fileRef } from '../file';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: cardRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      card: cardRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
