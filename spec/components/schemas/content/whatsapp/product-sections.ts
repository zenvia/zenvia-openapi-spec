import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const productSections: SchemaObject = {
  type: 'array',
  title: 'Product Sections',
  description: 'The available fields to be used in a product list. Only applicable to [WhatsApp](#tag/WhatsApp) channel.',
  minItems: 1,
  items: {
    type: 'object',
    required: ['title', 'productItems'],
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
          required: ['productId'],
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
  example: [{
    title: 'title',
    productItems: [{ productId: 'MY_PRODUCT_ID' }],
  }],
};

export const ref = createComponentRef(__filename);
export default productSections;
