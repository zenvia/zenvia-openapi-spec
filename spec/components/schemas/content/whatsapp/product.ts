import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const product: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'product',
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
        example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
      },
      productId: {
        type: 'string',
        description: 'The product identifier.',
      },
    },
    required: [
      'type',
      'body',
      'catalogId',
      'productId',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default product;
