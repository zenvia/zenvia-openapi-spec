import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const mediaBase: SchemaObject = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
      description: `Public URL of media file, which can be an image, a GIF, or a video, and will be displayed inside the card.
        <br><br>*Videos will display a play button instead of a preview of the content sent.*`,
      example: 'https://zenvia.br/zenvia-team.png',
    },
    disposition: {
      type: 'string',
      description: 'Defines the position that the media will be shown inside the card. Some of the values influence the media height.',
      default: 'ON_THE_TOP_SHORT_HEIGHT',
    },
    caption: {
      type: 'string',
      description: 'Media content description used by screen readers to aid users with disability understand the context',
      example: 'Zenvia\'s team picture',
    },
  },
  required: ['url'],
};

export const ref = createComponentRef(__filename);
export default mediaBase;
