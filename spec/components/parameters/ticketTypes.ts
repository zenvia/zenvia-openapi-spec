import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const ticketTypes: ParameterObject = {
  name: 'ticketTypes',
  in: 'query',
  required: false,
  description: 'The filtering options for usage types.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
      enum: ['activation', 'conversation', 'interaction'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default ticketTypes;
