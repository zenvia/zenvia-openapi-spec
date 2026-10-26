import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const page: ParameterObject = {
  name: 'page',
  in: 'query',
  required: false,
  description: 'The page number to retrieve (1-based). Defaults to 1, max: 1000.',
  schema: {
    type: 'integer',
    minimum: 1,
    maximum: 1000,
  },
};

export const ref = createComponentRef(__filename);
export default page;
