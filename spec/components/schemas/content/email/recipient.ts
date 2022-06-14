import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const type: SchemaObject = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      title: 'E-mail',
      description: 'E-mail address of the recipient.',
    },
    name: {
      type: 'string',
      title: 'Name',
      description: 'Name shown along the e-mail address.',
    },
  },
  required: ['email'],
};

export const ref = createComponentRef(__filename);
export default type;
