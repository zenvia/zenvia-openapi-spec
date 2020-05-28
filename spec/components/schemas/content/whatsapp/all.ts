import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from './file';
import { ref as templateRef } from '../template';
import { ref as contactsRef } from '../contacts';
import { ref as locationRef } from '../location';
import { ref as clickRef } from '../click';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }, {
    $ref: templateRef,
  }, {
    $ref: contactsRef,
  }, {
    $ref: locationRef,
  }, {
    $ref: clickRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      template: templateRef,
      contacts: contactsRef,
      location: locationRef,
      click: clickRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
