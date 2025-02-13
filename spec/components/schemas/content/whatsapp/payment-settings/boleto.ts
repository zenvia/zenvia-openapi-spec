import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const boleto: SchemaObject = {
  type: 'object',
  title: 'boleto',
  properties: {
    type: {
      type: 'string',
      description: 'The type of the payment method.',
      enum: ['boleto'],
    },
    digitableLine: {
      type: 'string',
      description: 'The Boleto digitable line / code which will be copied to the clipboard, when user taps on the Boleto CTA button.',
      minLength: 47,
      maxLength: 48,
    },
  },
  required: ['type', 'digitableLine'],
};

export const ref = createComponentRef(__filename);
export default boleto;
