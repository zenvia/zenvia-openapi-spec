import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';

const buttonItemBase: SchemaObject = {
  type: 'object',
  properties: {
    text: {
      title: 'Button text',
      type: 'string',
    },
  },
  required: [
    'text',
  ],
};

export const ref = createComponentRef(__filename);
export default buttonItemBase;
