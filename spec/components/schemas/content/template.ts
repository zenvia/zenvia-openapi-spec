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
            additionalProperties: false,
            required: ['cards'],
            properties: {
              cards: {
                type: 'array',
                description: 'The properties of the cards in a template. Only applicable to [WhatsApp](#tag/WhatsApp) channel.',
                minItems: 2,
                maxItems: 10,
                items: {
                  type: 'object',
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
