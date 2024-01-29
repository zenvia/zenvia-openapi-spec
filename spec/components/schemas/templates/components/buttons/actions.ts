// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as urlRef } from './button-item-url';
import { ref as phoneNumberRef } from './button-item-phone-number';
import { ref as mpmRef } from './button-item-mpm';
import { ref as copyCodeRef } from './button-item-coupon';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      items: {
        title: 'Buttons',
        description: 'List of buttons. You can have two URL buttons and only one of the following can be included: MPM, PHONE_NUMBER or COPY_CODE. MPM and COPY_CODE buttons are exclusively for use in [WHATSAPP](tag#WHATSAPP).',
        maxItems: 10,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [{
            $ref: urlRef,
          }, {
            $ref: phoneNumberRef,
          },
          {
            $ref: mpmRef,
          },
          {
            $ref: copyCodeRef,
          }],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              URL: urlRef,
              PHONE_NUMBER: phoneNumberRef,
              MPM: mpmRef,
              COPY_CODE: copyCodeRef,
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
