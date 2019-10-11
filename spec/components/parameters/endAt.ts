import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const endAt: ParameterObject = {
  name: 'endAt',
  in: 'query',
  required: false,
  description: 'The end date for the query period.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default endAt;
