import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const size: ParameterObject = {
  name: 'size',
  in: 'query',
  required: false,
  description: 'This is the page size. Default is 20.',
  schema: {
    type: 'number',
  },
};

export const ref = createComponentRef(__filename);
export default size;
