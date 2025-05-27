// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as urlRef } from './button-item-url';
import { ref as phoneNumberRef } from './button-item-phone-number';
import { ref as quickReplyRef } from './button-item-quick-reply';
import { ref as optOutRef } from './button-item-opt-out';
import { ref as mpmRef } from './button-item-mpm';
import { ref as copyCodeRef } from './button-item-coupon';
import { ref as orderDetailsRef } from './button-item-order-details';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      items: {
        title: 'Buttons',
        description: 'List of buttons. It is allowed to mix the 3 types of buttons, with a limit of up to 10 buttons for the [WhatsApp](#tag/WhatsApp) channel',
        maxItems: 10,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [
            { $ref: copyCodeRef },
            { $ref: mpmRef },
            { $ref: optOutRef },
            { $ref: phoneNumberRef },
            { $ref: quickReplyRef },
            { $ref: urlRef },
            {
              $ref: orderDetailsRef,
              'x-unpublished': true,
            },
          ],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              COPY_CODE: copyCodeRef,
              MPM: mpmRef,
              OPT_OUT: optOutRef,
              PHONE_NUMBER: phoneNumberRef,
              QUICK_REPLY: quickReplyRef,
              URL: urlRef,
              ORDER_DETAILS: orderDetailsRef,
            },
          },
        },
      },
    },
    required: [
      'items',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default buttons;
