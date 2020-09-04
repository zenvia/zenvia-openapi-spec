import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const visitor: SchemaObject = {
  title: 'OptOne',
  description: 'OptOne',
  type: 'object',
  properties: {
    name: {
      title: 'OptOne',
      description: 'OptOne',
      type: 'string',
    }
  },
};

export const ref = createComponentRef(__filename);
export default visitor;
