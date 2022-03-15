import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  default: 1000,
  description: 'The maximum amount of files to be returned. (Min: 1 | Max: 10000)',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default limit;
