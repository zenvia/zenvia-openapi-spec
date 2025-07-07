import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const category: ParameterObject = {
  name: 'category',
  in: 'query',
  required: false,
  description: 'Filter by category',
  schema: {
    type: 'string',
    enum: [
      'UTILITY', 'AUTHENTICATION', 'MARKETING',
    ],
  },
  example: 'UTILITY',
};

export const ref = createComponentRef(__filename);
export default category;
