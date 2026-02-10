import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const phone: ParameterObject = {
  name: 'channels.landline',
  in: 'query',
  required: false,
  description: 'The landline to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default phone;
