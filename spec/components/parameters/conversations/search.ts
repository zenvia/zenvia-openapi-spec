import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const search: ParameterObject = {
  name: 'search',
  in: 'query',
  required: false,
  description: 'Free-text search over the conversation and its contact.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default search;
