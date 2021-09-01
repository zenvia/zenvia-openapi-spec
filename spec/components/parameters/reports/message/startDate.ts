import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const startDate: ParameterObject = {
  name: 'startDate',
  in: 'query',
  required: true,
  description: 'The start date for query entries',
  schema: {
    type: 'string',
    format: 'date',
  },
};

export const ref = createComponentRef(__filename);
export default startDate;
