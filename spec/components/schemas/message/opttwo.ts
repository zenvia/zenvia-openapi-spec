import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const visitor: SchemaObject = {
  title: 'OptTwo',
  description: 'OptTwo',
  type: 'object',
  properties: {
    name: {
      title: 'OptTwo',
      description: 'OptTwo',
      type: 'string',
    }
  },
};

export const ref = createComponentRef(__filename);
export default visitor;
