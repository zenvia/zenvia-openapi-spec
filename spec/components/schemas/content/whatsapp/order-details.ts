import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as boleto } from './payment-settings/boleto';
import { ref as paymentLink } from './payment-settings/payment-link';
import { ref as pix } from './payment-settings/pix';

const orderDetails: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'order_details',
      },
      body: {
        type: 'string',
        description: 'Body content',
        example: 'Text body content',
        maxLength: 1024,
      },
      footer: {
        type: 'string',
        description: 'Footer content',
        example: 'Text footer content',
        maxLength: 60,
      },
      parameters: {
        type: 'object',
        properties: {
          referenceId: {
            type: 'string',
            description: 'The unique identifier of the order. This cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots. If not specified, we will generate a random identifier and return it in the request response.',
            maxLength: 35,
            pattern: '^[A-Za-z0-9_\\-\\.]+$',
          },
          type: {
            type: 'string',
            description: 'The type of the order item.',
            enum: ['digital_goods', 'physical_goods'],
          },
          paymentSettings: {
            type: 'array',
            description: 'List of payment configuration objects.',
            minItems: 1,
            maxItems: 2,
            items: {
              anyOf: [
                {
                  $ref: pix,
                },
                {
                  $ref: boleto,
                },
                {
                  $ref: paymentLink,
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
            properties: {
              catalogId: {
                type: 'string',
                description: 'The catalog identifier. Click <a href="https://business.facebook.com/commerce" target="_blank">here</a> to go to the catalogs page.',
              },
              expiration: {
                type: 'object',
                description: 'The expiration for that order. The CTA for payment will be disabled after expiry on the user end.',
                properties: {
                  timestamp: {
                    type: 'string',
                    description: 'The timestamp UTC time in seconds. Minimum threshold is 300 seconds.',
                    pattern: '^\\d+$',
                  },
                  description: {
                    type: 'string',
                    description: 'The description explaining when the order will expire.',
                    maxLength: 120,
                  },
                },
                required: ['timestamp', 'description'],
              },
              items: {
                type: 'array',
                description: 'The list of items that will be ordered.',
                minItems: 1,
                items: {
                  type: 'object',
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
                    saleAmount: {
                      type: 'number',
                      description: 'The discounted price per item.',
                      minimum: 0,
                    },
                  },
                  required: ['productId', 'name', 'amount', 'quantity'],
                },
              },
              subtotal: {
                type: 'number',
                description: 'The total value of the order in BRL with up to two decimal places.',
                example: 12.34,
                minimum: 0.01,
              },
              tax: {
                type: 'object',
                properties: {
                  value: {
                    type: 'number',
                    description: 'The total value of the tax in BRL with up to two decimal places.',
                    example: 12.34,
                    minimum: 0,
                  },
                  description: {
                    type: 'string',
                    description: 'The optional description of the tax.',
                    maxLength: 60,
                  },
                },
                required: ['value'],
              },
              shipping: {
                type: 'object',
                properties: {
                  value: {
                    type: 'number',
                    description: 'The total value of the shipping cost in BRL with up to two decimal places.',
                    example: 12.34,
                    minimum: 0.01,
                  },
                  description: {
                    type: 'string',
                    description: 'The optional description of the shipping cost.',
                  },
                },
                required: ['value'],
              },
              discount: {
                type: 'object',
                properties: {
                  value: {
                    type: 'number',
                    description: 'The total value of the discount in BRL with up to two decimal places.',
                    example: 12.34,
                    minimum: 0.01,
                  },
                  description: {
                    type: 'string',
                    description: 'The optional description of the discount.',
                    maxLength: 60,
                  },
                  discountProgramName: {
                    type: 'string',
                    description: 'The text used for defining incentivised orders. If order is incentivised, the merchant needs to define this information',
                    maxLength: 60,
                  },
                },
                required: ['value'],
              },
            },
            required: ['items', 'subtotal', 'tax'],
          },
        },
        required: ['type', 'paymentSettings', 'totalAmount', 'order'],
      },
    },
    required: ['type', 'body', 'parameters'],
  }],
};

export const ref = createComponentRef(__filename);
export default orderDetails;
