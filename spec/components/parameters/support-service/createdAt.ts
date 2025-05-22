import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const createdAt: ParameterObject = {
  name: 'createdAt',
  in: 'query',
  required: false,
  description: 'The date that the ticket was created.',
  schema: {
    type: 'string',
    format: 'date',
    example: '2024-01-31',
  },
};

export const ref = createComponentRef(__filename);
export default createdAt;
