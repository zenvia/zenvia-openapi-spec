import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const instagram: ParameterObject = {
  name: 'channels.instagram',
  in: 'query',
  required: false,
  description: 'The Instagram ID to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default instagram;