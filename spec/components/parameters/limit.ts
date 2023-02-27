import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const limit: ParameterObject = {
  name: 'limit',
  in: 'query',
  required: false,
  description: 'Number of elements on a page. If not filled, the default size is the total number of records',
  schema: {
    title: 'size',
    type: 'number',
  },
  example: 10,
};

export const ref = createComponentRef(__filename);
export default limit;
