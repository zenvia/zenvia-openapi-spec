import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const user: ParameterObject = {
  name: 'user',
  in: 'query',
  required: false,
  description: 'Filter by the assigned agent identifier.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default user;
