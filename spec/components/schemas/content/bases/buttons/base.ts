import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const buttonBase: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Button type',
      description: 'Button type discriminator',
      type: 'string',
    },
    text: {
      type: 'string',
      description: 'Text to be displayed inside the button.',
      example: 'Click me!',
    },
    payload: {
      type: 'string',
      description: 'Content to be sent back as a message event when the user clicks on the button. By default, the text of the button will be used as payload.',
      example: 'clicked',
    },
  },
};

export const ref = createComponentRef(__filename);
export default buttonBase;
