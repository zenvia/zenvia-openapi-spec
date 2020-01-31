import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const endDate: ParameterObject = {
  name: 'endDate',
  in: 'query',
  required: false,
  description: 'The end of the period to query entries.',
  schema: {
    type: 'string',
    format: 'Parseable date',
  },
};

export const ref = createComponentRef(__filename);
export default endDate;
