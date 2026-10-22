import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const size: ParameterObject = {
  name: 'size',
  in: 'query',
  required: false,
  description: 'The maximum number of results per page (default: 10, max: 100).',
  schema: {
    type: 'integer',
    minimum: 1,
    maximum: 100,
  },
};

export const ref = createComponentRef(__filename);
export default size;
