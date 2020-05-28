// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';

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
          properties: {
            type: {
              title: 'Button type',
              description: 'Type of button',
              type: 'string',
              format: 'QUICK_REPLY',
            },
            text: {
              title: 'Button text',
              description: 'Text that will fill the button',
              type: 'string',
            },
            payload: {
              title: 'Payload of button',
              description: 'This payload is used for identify the click in the callback',
            },
          },
          required: [
            'type',
            'text',
            'payload',
          ],
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
