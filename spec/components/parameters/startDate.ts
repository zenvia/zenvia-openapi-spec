import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const startDate: ParameterObject = {
  name: 'startDate',
  in: 'query',
  required: true,
  description: 'The start date for the query period.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default startDate;
