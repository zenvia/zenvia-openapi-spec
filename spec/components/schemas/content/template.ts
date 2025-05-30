import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';
import { ref as productSections } from './whatsapp/product-sections';

const template: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'template',
      },
      templateId: {
        type: 'string',
        description: 'The template identifier. Click <a href="https://app.zenvia.com/home/templates" target="_blank">here</a> to go to the template page.',
        example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
      },
      fields: {
        type: 'object',
        description: 'The available fields to be used in this template.<br><br>\
        For media templates, the media URL is obtained from `imageUrl`, `videoUrl` or `documentUrl` depending on the template used.<br><br>\
        For WhatsApp authentication templates, pass the `token` parameter and its value. It is required.<br><br>\
        For WhatsApp coupon templates, pass the `code` parameter and its value. It is required.',
        example: {
          user: 'John Smith',
          protocol: '34534252',
        },
        oneOf: [
          {
            title: 'Cards',
            required: ['cards'],
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
              cards: {
                type: 'array',
                description: 'The properties of the cards in a template.\nIn cards with a predefined order, each card will be rendered following its order at the time of the creation of the template.\n\n Only applicable to [WhatsApp](#tag/WhatsApp) channel.',
                minItems: 2,
                maxItems: 10,
                items: {
                  type: 'object',
                  anyOf: [
                    {
                      title: 'Cards with dynamic ordering and image as background',
                      required: ['orderPosition', 'imageUrl'],
                      properties: {
                        orderPosition: {
                          description: 'Defines the final position of the card in the outcome. The array index indicates which card is being referenced, and the value of `orderPosition` determines its final position.',
                          type: 'number',
                        },
                        imageUrl: {
                          type: 'string',
                          description: 'URL of the image',
                        },
                      },
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
                    },
                    {
                      title: 'Cards with dynamic ordering and video as background',
                      required: ['orderPosition', 'videoUrl'],
                      properties: {
                        orderPosition: {
                          description: 'Defines the final position of the card in the outcome. The array index indicates which card is being referenced, and the value of `orderPosition` determines its final position.',
                          type: 'number',
                        },
                        videoUrl: {
                          type: 'string',
                          description: 'URL of the video',
                        },
                      },
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
                    },
                    {
                      title: 'Cards with predefined order and image as background',
                      required: ['imageUrl'],
                      properties: {
                        imageUrl: {
                          type: 'string',
                          description: 'URL of the image',
                        },
                      },
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
                    },
                    {
                      title: 'Cards with predefined order and video as background',
                      required: ['videoUrl'],
                      properties: {
                        videoUrl: {
                          type: 'string',
                          description: 'URL of the video',
                        },
                      },
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
                    },
                  ],
                },
              },
            },
          },
          {
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
          },
          {
            title: 'Product Sections',
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
              sections: { $ref: productSections },
            },
          },
        ],
      },
    },
    required: [
      'type',
      'templateId',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default template;
