import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const size: ParameterObject = {
  name: 'size',
  in: 'query',
  required: false,
  description: 'The maximum number of results per page.',
  schema: {
    type: 'integer',
    minimum: 1,
  },
};

export const ref = createComponentRef(__filename);
export default size;
