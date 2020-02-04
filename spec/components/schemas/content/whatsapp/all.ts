import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from './file';
import { ref as templateRef } from '../template';
import { ref as contactRef } from '../contact';
import { ref as locationRef } from '../location';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: templateRef,
  }, {
    $ref: contactRef,
  }, {
    $ref: locationRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      template: templateRef,
      contact: contactRef,
      location: locationRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
