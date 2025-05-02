// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as urlRef } from './button-item-url';
import { ref as phoneNumberRef } from './button-item-phone-number';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      items: {
        title: 'Buttons',
        description: 'List of buttons. You can have two URL buttons and only one  PHONE_NUMBER button.',
        minItems: 1,
        maxItems: 2,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [{
            $ref: urlRef,
          }, {
            $ref: phoneNumberRef,
          }],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
              URL: urlRef,
              PHONE_NUMBER: phoneNumberRef,
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
