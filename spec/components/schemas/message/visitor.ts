import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const visitor: SchemaObject = {
  type: 'object',
  properties: {
    name: {
      title: 'Name',
      type: 'string',
    },
    firstName: {
      title: 'First name',
      type: 'string',
    },
    lastName: {
      title: 'Last name',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default visitor;
