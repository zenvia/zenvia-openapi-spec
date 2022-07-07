import { SchemaObject } from 'openapi3-ts';
import { ref as buttonsRef } from './buttons-list';
import { createComponentRef } from '../../../../../utils/ref';

const card: SchemaObject = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      description: `A title in bold shown above the text of the card.
        <br>*[Instagram](#tag/Instagram): A maximum of 80 characters is supported.*`,
      example: 'Hello',
    },
    text: {
      type: 'string',
      description: `A text to be displayed inside the card.
        <br>*[Instagram](#tag/Instagram): A maximum of 80 characters is supported.*`,
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
