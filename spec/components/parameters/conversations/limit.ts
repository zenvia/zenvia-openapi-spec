import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  required: false,
  description: 'The maximum number of results per page.',
  schema: {
    type: 'integer',
    minimum: 1,
  },
};

export const ref = createComponentRef(__filename);
export default limit;
