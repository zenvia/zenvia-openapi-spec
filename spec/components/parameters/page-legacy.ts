import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const page: ParameterObject = {
  name: 'page',
  in: 'query',
  required: false,
  description: 'This is the page number.',
  schema: {
    title: 'page',
    type: 'number',
    default: 0,
  },
  example: 5,
};

export const ref = createComponentRef(__filename);
export default page;
