import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const paymentLink: SchemaObject = {
  type: 'object',
  title: 'payment_link',
  properties: {
    type: {
      type: 'string',
      description: 'The type of the payment method.',
      enum: ['payment_link'],
    },
    paymentLink: {
      type: 'string',
      description: 'A valid payment URL.',
      pattern: '^(https)://[^\\s/$.?#].[^\\s]*$',
    },
  },
  required: ['type', 'paymentLink'],
};

export const ref = createComponentRef(__filename);
export default paymentLink;
