import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const size: ParameterObject = {
  name: 'size',
  in: 'query',
  required: false,
  description: 'This is the page size.',
  schema: {
    title: 'size',
    type: 'number',
    default: 500,
  },
  example: 10,
};

export const ref = createComponentRef(__filename);
export default size;
