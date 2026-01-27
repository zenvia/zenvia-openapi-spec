import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const email: ParameterObject = {
  name: 'email',
  in: 'query',
  required: true,
  description: 'The email contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default email;
