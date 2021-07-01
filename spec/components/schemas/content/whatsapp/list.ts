import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const list: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'list',
      },
      header: {
        type: 'string',
        title: 'Header text',
        example: 'Header text.',
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
      button: {
        type: 'string',
        title: 'List button',
        description: 'Button used to open the list. Does not allow emojis or markdown.',
        minLength: 1,
        maxLength: 20,
      },
      sections: {
        type: 'array',
        title: 'List of sections',
        minItems: 1,
        maxItems: 10,
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: 'Section title',
              example: 'Section name',
            },
            rows: {
              type: 'array',
              minItems: 1,
              maxItems: 10,
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    title: 'Row id',
                    example: 'Row id',
                  },
                  title: {
                    type: 'string',
                    title: 'Row title',
                    example: 'Row title',
                  },
                  description: {
                    type: 'string',
                    title: 'Row description',
                    example: 'Row description',
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
            'title', // WhatsApp says: Required if the message has more than one section
            'rows',
          ],
        },
      },
    },
    required: [
      'type',
      'body',
      'button',
      'sections',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default list;
