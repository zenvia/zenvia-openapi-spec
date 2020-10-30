import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as postBackRef } from './postback';
import { ref as webUrlRef } from './web-url';

export const buttons: SchemaObject = {
  title: 'Buttons',
  description: 'RCS buttons',
  type: 'object',
  oneOf: [{
    $ref: postBackRef,
  }, {
    $ref: webUrlRef,
  }],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      postback: postBackRef,
      web_url: webUrlRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttons;
