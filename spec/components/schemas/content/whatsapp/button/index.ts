import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../../base';
import { ref as headerRef } from './header';
import { createComponentRef } from '../../../../../../utils/ref';

const button: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'button',
      },
      header: {
        $ref: headerRef,
      },
      body: {
        type: 'string',
        title: 'Body text',
        example: 'Body text.',
      },
      footer: {
        type: 'string',
        title: 'Footer text',
        example: 'Footer text.',
      },
      buttons: {
        type: 'array',
        title: 'List of buttons',
        minItems: 1,
        maxItems: 3,
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'Button ID',
            },
            title: {
              type: 'string',
              example: 'Button text',
            },
          },
          required: [
            'id',
            'title',
          ],
        },
      },
    },
    required: [
      'type',
      'body',
      'buttons',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default button;
