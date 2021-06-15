import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const mediaBase: SchemaObject = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
      description: `Public URL of media file, which can be an image, a GIF or a video, which will be diplayed in the card.
        <br><br>*Videos will display a play button instead of a preview of the content.*`,
      example: 'https://zenvia.br/zenvia-team.png',
    },
    disposition: {
      type: 'string',
      description: 'Controls where in the card the media will be shown, and some values also influence the media height.',
      default: 'ON_THE_TOP_SHORT_HEIGHT',
    },
    caption: {
      type: 'string',
      description: 'Media content description, used by screen readers to help users with disability to understand the context.',
      example: 'Zenvia\'s team picture',
    },
  },
  required: ['url'],
};

export const ref = createComponentRef(__filename);
export default mediaBase;
