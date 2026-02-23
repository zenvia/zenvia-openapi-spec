import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const twitter: ParameterObject = {
  name: 'channels.twitter',
  in: 'query',
  required: false,
  description: 'The Twitter handle to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default twitter;