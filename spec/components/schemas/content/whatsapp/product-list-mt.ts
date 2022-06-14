import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as templateRef } from '../template';
import { ref as contactsRef } from '../contacts';
import { ref as locationRef } from '../location';
import { ref as buttonRef } from './button';
import { ref as listRef } from './list';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as productListRef } from './product-list';

const mtContent: SchemaObject = {
  title: 'WhatsApp',
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
    $ref: buttonRef,
  }, {
    $ref: listRef,
  }, {
    $ref: productListRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
      template: templateRef,
      contacts: contactsRef,
      location: locationRef,
      button: buttonRef,
      list: listRef,
      product_list: productListRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default mtContent;
