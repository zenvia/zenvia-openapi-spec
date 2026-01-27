import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const phone: ParameterObject = {
  name: 'phone',
  in: 'query',
  required: true,
  description: 'The phone contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default phone;
