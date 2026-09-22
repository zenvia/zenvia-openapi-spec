import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const ids: ParameterObject = {
  name: 'ids',
  in: 'query',
  required: false,
  description: 'Filter by one or more conversation identifiers.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default ids;
