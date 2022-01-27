import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from './text';
import { ref as templateFixedRef } from '../template-fixed';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'SMS',
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: templateFixedRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      template: templateFixedRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
