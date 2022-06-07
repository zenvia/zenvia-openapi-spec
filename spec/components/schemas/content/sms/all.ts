import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from './text';
import { ref as templateRef } from '../template';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'SMS',
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: templateRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      template: templateRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
