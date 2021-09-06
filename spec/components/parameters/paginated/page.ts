import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const page: ParameterObject = {
  name: 'page',
  in: 'query',
  required: false,
  description: 'This is the page number. Default is 0.',
  schema: {
    type: 'number',
  },
};

export const ref = createComponentRef(__filename);
export default page;
