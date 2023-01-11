import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const mediaBase: SchemaObject = {
  type: 'object',
  title: 'Media',
  description: 'An image or a video to be displayed inside the card.',
  properties: {
    url: {
      type: 'string',
      description: `Public URL of media file, which can be an image, a GIF, or a video. The media will be displayed inside the card.
        <br><br>*Videos usually will display a play button instead of a preview of the content sent.*
        <br>*Some channels do not support videos or GIFs.*`,
      example: 'https://zenvia.com/zenvia-team.png',
    },
    disposition: {
      type: 'string',
      default: 'ON_THE_TOP_SHORT_HEIGHT',
    },
    caption: {
      type: 'string',
      description: `Media content description used by screen readers to aid users with disability understand the context.
        <br><br>*Only applicable to [RCS](#tag/RCS) and [Google Business Messages](#tag/Google-Business-Messages) channels.*`,
      example: 'Zenvia\'s team picture',
    },
  },
  required: ['url'],
};

export const ref = createComponentRef(__filename);
export default mediaBase;
