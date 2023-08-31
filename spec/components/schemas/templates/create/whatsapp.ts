import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as whatsappTemplateCategoriesRef } from '../category/whatsapp';
import { ref as whatsappComponents } from '../components/whatsapp';

const whatsappTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: whatsappComponents,
      },
      category: {
        $ref: whatsappTemplateCategoriesRef,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default whatsappTemplate;
