import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as replyToRef } from '../reply-to';

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
      },
      productId: {
        type: 'string',
        description: 'The product identifier.',
      },
    },
    required: [
      'type',
      'catalogId',
      'productId',
    ],
  }, {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default product;
