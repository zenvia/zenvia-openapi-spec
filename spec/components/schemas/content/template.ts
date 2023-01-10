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
      type: {
        type: 'string',
        example: 'template',
      },
      templateId: {
        type: 'string',
        description: 'The template identifier. Click <a href="https://app.zenvia.com/home/templates" target="_blank">here</a> to go to the template page.',
        example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
      },
      fields: {
        type: 'object',
        description: 'The available fields to be used in this template.',
        example: {
          user: 'John Smith',
          protocol: '34534252',
        },
        additionalProperties: {
          title: 'Field Value',
          description: 'Value provided to fill the variable named after the property name.',
        },
      },
    },
    required: [
      'type',
      'templateId',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default template;
