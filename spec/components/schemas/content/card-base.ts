import { SchemaObject } from 'openapi3-ts';
import { ref as buttonsRef } from './nestable-contents/buttons-list';
import { createComponentRef } from '../../../../utils/ref';

const card: SchemaObject = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      description: 'A title in bold shown above the text of the card.',
      example: 'Hello',
    },
    text: {
      type: 'string',
      description: 'A text to be displayed inside the card.',
      example: 'This is the best thing you will see today!',
    },
    media: {
      type: 'object',
    },
    buttons: {
      $ref: buttonsRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default card;
