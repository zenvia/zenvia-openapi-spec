import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from '../text';
import { ref as fileRef } from '../file';
import { ref as templateRef } from '../template';
import { ref as contactsRef } from '../contacts';
import { ref as locationRef } from '../location';
import { ref as buttonRef } from './button';
import { ref as listRef } from './list';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as productRef } from './product';
import { ref as productListRef } from './product-list';
import { ref as orderDetailsRef } from './order-details';
import { ref as orderStatusRef } from './order-status';

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
    $ref: productRef,
  }, {
    $ref: productListRef,
  }, {
    $ref: orderDetailsRef,
    'x-unpublished': true,
  }, {
    $ref: orderStatusRef,
    'x-unpublished': true,
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
      product: productRef,
      product_list: productListRef,
      order_details: orderDetailsRef,
      order_status: orderStatusRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default mtContent;
