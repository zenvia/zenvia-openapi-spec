import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const id: ParameterObject = {
  name: 'id',
  in: 'query',
  required: false,
  description: 'Filter by one or more conversation identifiers (repeat the parameter for multiple values, e.g. id=a&id=b).',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default id;
