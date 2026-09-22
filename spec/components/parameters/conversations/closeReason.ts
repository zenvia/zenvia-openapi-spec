import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const closeReason: ParameterObject = {
  name: 'closeReason',
  in: 'query',
  required: false,
  description: 'Filter closed conversations by their close reason key.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default closeReason;
