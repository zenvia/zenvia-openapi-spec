import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const mediaBase: SchemaObject = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
      description: `Public URL of media file, which can be an image, a GIF or a video, which will be diplayed in the card.
        <br><br>*Videos will display a play button instead of a preview of the content.*`,
      example: 'https://fooo.bar/image',
    },
    disposition: {
      type: 'string',
      description: 'Controls where in the card the media will be shown, and some values also influence the media height.',
      default: 'SHORT_HEIGHT_ON_THE_TOP',
    },
    caption: {
      type: 'string',
      description: 'Media content description, used by screen readers to help users with disability to understand the context.',
    },
  },
  required: ['url'],
};

export const ref = createComponentRef(__filename);
export default mediaBase;
