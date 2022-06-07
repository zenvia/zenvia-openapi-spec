import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  description: 'The maximum amount of files to be returned.',
  schema: {
    type: 'integer',
    default: 1000,
    maximum: 10000,
    minimum: 1,
  },
};

export const ref = createComponentRef(__filename);
export default limit;
