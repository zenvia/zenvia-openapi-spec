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
      templateId: {
        type: 'string',
        description: 'The template identifier. Click <a href="https://app.zenvia.com/home/templates" target="_blank">here</a> to go to the template page.',
      },
      fields: {
        type: 'object',
        description: 'The available fields to be used in this template.',
        properties: {
          field: {
            type: 'string',
            description: 'Message that will be replaced on field',
          },
        },
      },
    },
    required: [
      'templateId',
      'fields',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default template;
