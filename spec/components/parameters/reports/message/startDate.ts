import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const startDate: ParameterObject = {
  name: 'startDate',
  in: 'query',
  required: true,
  description: 'The start of the period to query entries.',
  schema: {
    type: 'string',
    format: 'Parseable date',
  },
};

export const ref = createComponentRef(__filename);
export default startDate;
