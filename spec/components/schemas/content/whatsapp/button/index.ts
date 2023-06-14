import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../../base';
import { ref as headerRef } from './header';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as replyToRef } from '../../reply-to';

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
        minLength: 1,
        maxLength: 1024,
      },
      footer: {
        type: 'string',
        title: 'Footer text',
        example: 'Footer text.',
        minLength: 1,
        maxLength: 60,
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
              minLength: 1,
              maxLength: 256,
            },
            title: {
              type: 'string',
              example: 'Button text',
              minLength: 1,
              maxLength: 20,
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
  }, {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default button;
