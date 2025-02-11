import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const pix: SchemaObject = {
  title: 'pix',
  description: 'The type of the payment method',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      description: 'The type of the payment method. For \'pix_dynamic_code\', Pix payment instructions that will be displayed to buyers during the checkout process if they decide to pay outside of WhatsApp.',
      enum: ['pix_dynamic_code'],
    },
    code: {
      type: 'string',
      description: 'The dynamic Pix code to be sent to the buyer.',
    },
    merchantName: {
      type: 'string',
      description: 'The name of account holder. Displayed in-app for the buyer for informational purposes.',
    },
    key: {
      type: 'string',
      description: 'The Pix key.',
    },
    keyType: {
      type: 'string',
      description: 'The type of the Pix key.',
      enum: ['CPF', 'CNPJ', 'EMAIL', 'PHONE', 'EVP'],
    },
  },
  required: ['type', 'code', 'merchantName', 'key', 'keyType'],
}

export const ref = createComponentRef(__filename);
export default pix;
