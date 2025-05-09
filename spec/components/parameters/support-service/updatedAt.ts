import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const updatedAt: ParameterObject = {
  name: 'updatedAt',
  in: 'query',
  required: false,
  description: 'The date that the ticket was updated.',
  schema: {
    type: 'string',
    format: 'date',
    example: '2024-01-31',
  },
};

export const ref = createComponentRef(__filename);
export default updatedAt;
