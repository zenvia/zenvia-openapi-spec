import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const phone: ParameterObject = {
  name: 'channels.mobile',
  in: 'query',
  required: false,
  description: 'The mobile to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default phone;
