import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as productListMtContentsRef } from '../content/whatsapp/product-list-mt';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: productListMtContentsRef,
        },
        minItems: 1,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
