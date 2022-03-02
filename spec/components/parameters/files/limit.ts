import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  required: true,
  description: 'The amount of files should be returned',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default limit;
