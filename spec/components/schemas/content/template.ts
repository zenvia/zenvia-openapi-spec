import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const template: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      templateId: { type: 'string' },
      fields: { type: 'object' },
    },
    required: [
      'templateId',
      'fields',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default template;
