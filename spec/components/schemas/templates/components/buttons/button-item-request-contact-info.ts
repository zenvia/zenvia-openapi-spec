import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';
import { ref as btnTextRef } from './button-item-text';

const requestContactInfoButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['REQUEST_CONTACT_INFO'],
        },
      },
      required: [
        'type',
        'text',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default requestContactInfoButton;
