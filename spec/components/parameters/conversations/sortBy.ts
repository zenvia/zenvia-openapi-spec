import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sortBy: ParameterObject = {
  name: 'sortBy',
  in: 'query',
  required: false,
  description: 'The field to sort by. Must be used together with direction.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sortBy;
