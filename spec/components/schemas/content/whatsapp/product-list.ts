import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { ref as productSections } from './product-sections';
import { createComponentRef } from '../../../../../utils/ref';

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
      sections: { $ref: productSections },
    },
    required: [
      'type',
      'catalogId',
      'body',
      'sections',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default productList;
