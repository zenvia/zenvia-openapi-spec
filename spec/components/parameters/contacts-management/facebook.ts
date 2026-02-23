import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const facebook: ParameterObject = {
  name: 'channels.facebook',
  in: 'query',
  required: false,
  description: 'The Facebook ID to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default facebook;