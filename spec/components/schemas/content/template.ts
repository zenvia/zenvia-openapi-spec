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
                  oneOf: [
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
                    },
                    {
                      title: 'Cards with predefined order and image as background',
                      required: ['imageUrl'],
                      additionalProperties: false,
                      properties: {
                        imageUrl: {
                          type: 'string',
                          description: 'URL of the image',
                        },
                      },
                    },
                    {
                      title: 'Cards with predefined order and video as background',
                      required: ['videoUrl'],
                      additionalProperties: false,
                      properties: {
                        videoUrl: {
                          type: 'string',
                          description: 'URL of the video',
                        },
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
                    description: 'An optional unique id to reference the order.',
                  },
                  type: {
                    type: 'string',
                    enum: ['digital-goods', 'physical-goods'],
                    description: 'Type of product being purchased',
                  },
                  paymentSettings: {
                    type: 'array',
                    description: 'List of supported payment configurations presented to the user during checkout.',
                    minItems: 1,
                    maxItems: 2,
                    items: {
                      type: 'object',
                      anyOf: [
                        {
                          title: 'Payment link',
                          required: ['paymentLink'],
                          properties: {
                            paymentLink: {
                              description: 'URL to the hosted payment page the buyer will use to complete the transaction.',
                              type: 'string',
                            },
                          },
                        },
                        {
                          title: 'Boleto',
                          required: ['digitableLine'],
                          properties: {
                            digitableLine: {
                              description: 'The digitable line of the Boleto, used for payment processing.',
                              type: 'string',
                            },
                          },
                        },
                        {
                          title: 'Pix',
                          required: ['code', 'merchantName', 'key', 'keyType'],
                          properties: {
                            code: {
                              description: 'The dynamic Pix code to be used for payment.',
                              type: 'string',
                            },
                            merchantName: {
                              description: 'The registered name of the business receiving the payment.',
                              type: 'string',
                            },
                            key: {
                              description: 'The pix key of the business receiving the payment.',
                              type: 'string',
                            },
                            keyType: {
                              enum: ['CPF', 'CNPJ', 'EMAIL', 'PHONE', 'EVP'],
                              description: 'The pix key type.',
                              type: 'string',
                            },
                          },
                        },
                      ],
                    },
                  },
                  totalAmount: {
                    type: 'number',
                    description: 'Total cost of items, including tax and any additional charges.',
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
                              description: 'The product identifier.',
                            },
                            name: {
                              type: 'string',
                              description: 'The name of the product.',
                            },
                            amount: {
                              type: 'number',
                              description: 'The unit price of the product.',
                            },
                            quantity: {
                              type: 'number',
                              description: 'The number of products being purchased.',
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
                            description: 'Monetary value of the tax applied.',
                          },
                        },
                      },
                      subtotal: {
                        type: 'number',
                        description: 'Total cost of items before tax and additional charges (calculated as product price x quantity).',
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
