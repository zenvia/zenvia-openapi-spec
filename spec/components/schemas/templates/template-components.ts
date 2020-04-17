// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const components: SchemaObject = {
  title: 'Components',
  description: 'Message content of this template',
  type: 'object',
  required: [
    'body',
  ],
  properties: {
    header: {
      title: 'Header',
      description: 'Template header',
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          title: 'Header type',
          description: 'The header can have an image or a document.',
          type: 'string',
          enum: ['MEDIA_DOCUMENT', 'MEDIA_IMAGE'],
        },
      },
    },
    body: {
      title: 'Body',
      description: 'Template body',
      type: 'object',
      required: ['type', 'text'],
      properties: {
        type: {
          title: 'Body type',
          description: 'The body should have a fixed or variable text. Variable text can have variables using format _{{var_name}}_',
          type: 'string',
          enum: ['TEXT_FIXED', 'TEXT_TEMPLATE'],
        },
        text: {
          title: 'Body text',
          type: 'string',
        },
      },
    },
    footer: {
      title: 'Footer',
      description: 'Template footer',
      type: 'object',
      required: ['type', 'text'],
      properties: {
        type: {
          title: 'Footer type',
          description: 'The footer can only be a fixed text',
          type: 'string',
          enum: ['TEXT_FIXED'],
        },
        text: {
          title: 'Footer text',
          type: 'string',
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default components;
