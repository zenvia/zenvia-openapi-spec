// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';
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
        description: 'List of buttons',
        maxItems: 3,
        type: 'array',
        items: {
          type: 'object',
          oneOf: [{
            $ref: quickReplyRef,
          }],
          required: [
            'type',
          ],
          discriminator: {
            propertyName: 'type',
            mapping: {
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
