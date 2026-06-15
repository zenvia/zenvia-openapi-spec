import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const requestContactInfoButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    {
      type: 'object',
      properties: {
        text: {
          title: 'Button text',
          description:
            'Button text. If omitted, the backend will inject the default text "Share Contact Info". Must be exactly "Share Contact Info" if provided.',
          type: 'string',
          enum: ['Share Contact Info'],
        },
      },
      required: ['type'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default requestContactInfoButton;
