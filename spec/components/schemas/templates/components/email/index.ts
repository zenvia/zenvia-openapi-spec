import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const email: SchemaObject = {
  type: 'object',
  properties: {
    replyTo: {
      title: 'Email type',
      description: 'Address the reply will be sent. Variable text can have variables using format _{{var_name}}_',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default email;