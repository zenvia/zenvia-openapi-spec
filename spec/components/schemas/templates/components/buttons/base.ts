import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const contentBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Content type',
      type: 'string',
    },
  },
  required: [
    'type',
  ],
};

export const ref = createComponentRef(__filename);
export default contentBase;
