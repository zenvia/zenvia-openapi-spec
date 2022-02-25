// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as urlRef } from './button-item-url';
import { ref as phoneNumberRef } from './button-item-phone-number';
import { ref as quickReplyRef } from './button-item-quick-reply';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      items: {
        title: 'Buttons',
        description: 'List of buttons. Currently, only [RCS](#tag/RCS) channel is allowed. it is allowed to mix the 3 types of buttons, with a limit of up to 11 buttons.',
        maxItems: 11,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [{
            $ref: urlRef,
          }, {
            $ref: phoneNumberRef,
          }, {
            $ref: quickReplyRef,
          }],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              URL: urlRef,
              PHONE_NUMBER: phoneNumberRef,
              QUICK_REPLY: quickReplyRef,
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
