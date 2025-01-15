// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
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
        description: 'List of buttons. It is allowed to mix the 3 types of buttons.',
        minItems: 1,
        maxItems: 2,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [
            { $ref: phoneNumberRef },
            { $ref: quickReplyRef },
            { $ref: urlRef },
          ],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              PHONE_NUMBER: phoneNumberRef,
              QUICK_REPLY: quickReplyRef,
              URL: urlRef,
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
