import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const buttonBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Button type',
      description: 'Button type discriminator',
      type: 'string',
    },
  },
  required: [
    'type',
  ],
};

export const ref = createComponentRef(__filename);
export default buttonBase;
