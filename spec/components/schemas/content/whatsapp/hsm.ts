import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const template: SchemaObject = {
  title: 'The template data',
  description: 'Selection of existent HSM template',
  type: 'object',
  properties: {
    namespace: {
      description: 'The namespace that will be used',
      type: 'string',
    },
    name: {
      description: 'The name of template to use within the namespace',
      type: 'string',
    },
    locale: {
      description: 'Language locale of template. Default is pt_BR',
      type: 'string',
    },
  },
  required: ['namespace' , 'name', 'locale'],
};

const params: SchemaObject = {
  title: 'Template params',
  description: 'Parameters that will be dynamically incorporated into the message',
  type: 'object',
  properties: {
    data: {
      description: 'Object containing `name-value` parameters',
      type: 'object',
    },
    order: {
      description: 'Array with parameters name in the same order expected by the desired template',
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['data' , 'order'],
};

const hsm: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      template,
      params,
    },
    required: ['template', 'params'],
  }],
};

export const ref = createComponentRef(__filename);
export default hsm;
