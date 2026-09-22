import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const groupIds: ParameterObject = {
  name: 'groupIds',
  in: 'query',
  required: false,
  description: 'Filter by one or more group identifiers.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default groupIds;
