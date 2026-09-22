import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const status: ParameterObject = {
  name: 'status',
  in: 'query',
  required: false,
  description: 'Filter by conversation status.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default status;
