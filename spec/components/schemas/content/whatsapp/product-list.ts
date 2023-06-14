import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as replyToRef } from '../reply-to';

const productList: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'product_list',
      },
      header: {
        type: 'string',
        description: 'Header content',
        example: 'Text header content',
      },
      body: {
        type: 'string',
        description: 'Body content',
        example: 'Text body content',
      },
      footer: {
        type: 'string',
        description: 'Footer content',
        example: 'Text footer content',
      },
      catalogId: {
        type: 'string',
        description: 'The catalog identifier. Click <a href="https://business.facebook.com/commerce" target="_blank">here</a> to go to the catalogs page.',
      },
      sections: {
        type: 'array',
        description: 'The available fields to be used in this product list.',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'The section title.',
            },
            productItems: {
              type: 'array',
              description: 'A list of products.',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'string',
                    description: 'The product identifier.',
                  },
                },
              },
            },
          },
        },
      },
    },
    required: [
      'type',
      'catalogId',
      'body',
      'sections',
    ],
  }, {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default productList;
