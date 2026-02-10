import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const email: ParameterObject = {
  name: 'channels.email',
  in: 'query',
  required: false,
  description: 'The email to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default email;