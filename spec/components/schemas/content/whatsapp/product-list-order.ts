import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as replyToRef } from '../reply-to'

const productListOrder: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'product_list_order',
      },
      text: {
        type: 'string',
        description: 'Text content',
        example: 'Text content',
      },
      catalogId: {
        type: 'string',
        description: 'The catalog identifier.',
      },
      productItems: {
        type: 'array',
        description: 'The available fields to be used in this product list order.',
        items: {
          type: 'object',
          properties: {
            productId: {
              type: 'string',
              description: 'The product identifier.',
            },
            quantity: {
              type: 'string',
              description: 'quantity',
            },
            itemPrice: {
              type: 'string',
              description: 'itemPrice',
            },
            currency: {
              type: 'string',
              description: 'currency',
            },
          },
        },
      },
    },
    required: [
      'type',
      'catalogId',
      'productItems',
    ],
  }, {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default productListOrder;
