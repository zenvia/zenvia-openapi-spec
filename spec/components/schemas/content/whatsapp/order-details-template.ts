import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const orderDetailsTemplate: SchemaObject = {
  title: 'Order Details',
  required: ['orderDetailsParameters'],
  additionalProperties: {
    description: 'Value provided to fill the variable named after the property name.',
    oneOf: [{
      type: 'string',
      example: 'Zenvia',
    }, {
      type: 'number',
      example: 1,
    }, {
      type: 'boolean',
      example: true,
    }],
  },
  properties: {
    orderDetailsParameters: {
    type: 'object',
    description: 'Details of a payment template.\n\n *Only applicable to [WhatsApp](#tag/WhatsApp) channel.*',
    required: ['order', 'totalAmount', 'type', 'paymentSettings'],
    properties: {
      referenceId: {
        type: 'string',
        description: 'An optional unique identifier of the order. This can only contain English letters, numbers, underscores, dashes, or dots.',
        maxLength: 35,
        pattern: '^[A-Za-z0-9_\\-\\.]+$',
      },
      type: {
        type: 'string',
        enum: ['digital-goods', 'physical-goods'],
        description: 'The type of the order item.',
      },
      paymentSettings: {
        type: 'array',
        description: 'List of payment configuration objects.',
        minItems: 1,
        maxItems: 2,
        items: {
          type: 'object',
          anyOf: [
            {
              title: 'Payment link',
              required: ['paymentLink', 'type'],
              properties: {
                type: {
                  description: 'The type of the payment method.',
                  enum: ['payment_link'],
                  type: 'string',
                },
                paymentLink: {
                  description: 'A valid payment URL.',
                  pattern: '^(https)://[^\\s/$.?#].[^\\s]*$',
                  type: 'string',
                },
              },
            },
            {
              title: 'Boleto',
              required: ['digitableLine', 'type'],
              properties: {
                type: {
                  description: 'The type of the payment method.',
                  enum: ['boleto'],
                  type: 'string',
                },
                digitableLine: {
                  description: 'The Boleto digitable line / code which will be copied to the clipboard, when user taps on the Boleto CTA button.',
                  minLength: 47,
                  maxLength: 48,
                  type: 'string',
                },
              },
            },
            {
              title: 'Pix',
              required: ['code', 'merchantName', 'key', 'keyType', 'type'],
              properties: {
                type: {
                  enum: ['pix_dynamic_code'],
                  type: 'string',
                  description: 'The type of the payment method. For \'pix_dynamic_code\', Pix payment instructions that will be displayed to buyers during the checkout process if they decide to pay outside of WhatsApp.',
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
            },
          ],
        },
      },
      totalAmount: {
        type: 'number',
        description: 'The total amount of the order in BRL with up to two decimal places.',
        example: 12.34,
        minimum: 0.01,
      },
      order: {
        type: 'object',
        required: ['items', 'tax', 'subtotal'],
        description: 'Details of the purchase order containing items purchased, subtotal amount, and tax details.',
        properties: {
          items: {
            type: 'array',
            description: 'List of products included in the order, with details for each item.',
            items: {
              type: 'object',
              required: ['productId', 'name', 'amount', 'quantity'],
              properties: {
                productId: {
                  type: 'string',
                  description: 'The product item catalog identifier.',
                },
                name: {
                  type: 'string',
                  description: 'The name of the item to be displayed to the user.',
                  maxLength: 60,
                },
                amount: {
                  type: 'number',
                  description: 'The price per item in BRL with up to two decimal places.',
                  example: 12.34,
                  minimum: 0.01,
                },
                quantity: {
                  type: 'number',
                  description: 'The quantity of the item in this order.',
                  minimum: 0,
                },
              },
            },
          },
          tax: {
            type: 'object',
            description: 'Tax details applied to the purchase.',
            required: ['value'],
            properties: {
              value: {
                type: 'number',
                description: 'The total value of the tax in BRL with up to two decimal places.',
                example: 12.34,
                minimum: 0,
              },
            },
          },
          subtotal: {
            type: 'number',
            description: 'The total value of the order in BRL with up to two decimal places.',
            example: 12.34,
            minimum: 0.01,
          },
        },
      },
    },
    },
  },
};

export const ref = createComponentRef(__filename);
export default orderDetailsTemplate;
