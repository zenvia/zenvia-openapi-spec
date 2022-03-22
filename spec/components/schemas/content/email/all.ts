import { SchemaObject } from 'openapi3-ts';
import { ref as emailRef } from '../email';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  title: 'E-Mail',
  oneOf: [{
    $ref: emailRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      email: emailRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
