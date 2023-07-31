import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as categorySchemaRef } from '../category/base';
import { ref as whatsappComponents } from '../components/whatsapp';
import { ref as examplesSchemaRef } from '../template-example';

const whatsappTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: whatsappComponents,
      },
      category: {
        $ref: categorySchemaRef,
      },
      examples: {
        $ref: examplesSchemaRef,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default whatsappTemplate;
