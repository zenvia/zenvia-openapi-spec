import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const direction: ParameterObject = {
  name: 'direction',
  in: 'query',
  required: false,
  description: 'The sort direction. Must be used together with sortBy.',
  schema: {
    type: 'string',
    enum: ['ASC', 'DESC'],
  },
};

export const ref = createComponentRef(__filename);
export default direction;
