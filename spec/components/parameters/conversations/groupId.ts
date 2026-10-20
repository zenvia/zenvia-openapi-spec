import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const groupId: ParameterObject = {
  name: 'groupId',
  in: 'query',
  required: false,
  description: 'Filter by one or more group identifiers (repeat the parameter for multiple values, e.g. groupId=a&groupId=b).',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default groupId;
