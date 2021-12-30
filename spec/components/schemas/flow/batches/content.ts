import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const content: SchemaObject = {
  title: 'The batch content',
  description: 'The content to be used on dispatch',
  type: 'object',
  properties: {
    fieldNames: {
      description: 'Field names, ignored when containsHeader=true (you can send empty in this case)',
      type: 'array',
      minItems: 1,
      items: {
        type: 'string',
      },
      example: ['sms', 'name', 'product', 'deliveryDate']
    },
  }
};

export const ref = createComponentRef(__filename);
export default content;
