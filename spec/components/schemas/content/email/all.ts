import { SchemaObject } from 'openapi3-ts';
import { ref as emailRef } from '../email';
import { ref as templateRef } from '../template';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'E-Mail',
  oneOf: [{
    $ref: emailRef,
  }, {
    $ref: templateRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      email: emailRef,
      template: templateRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
