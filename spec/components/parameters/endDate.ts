import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const endDate: ParameterObject = {
  name: 'endDate',
  in: 'query',
  required: false,
  description: 'The end date for the query period.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default endDate;
