import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const groupBy: ParameterObject = {
  name: 'groupBy',
  in: 'query',
  required: false,
  description: 'Grouping options for usage entries.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
      enum: ['channel', 'productAlias', 'productId', 'productType', 'ticketType'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default groupBy;
