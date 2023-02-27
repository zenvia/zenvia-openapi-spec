import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  required: false,
  description: 'Number of elements of a page.',
  schema: {
    title: 'size',
    type: 'number',
    default: 'total records size',
  },
  example: 10,
};

export const ref = createComponentRef(__filename);
export default limit;
