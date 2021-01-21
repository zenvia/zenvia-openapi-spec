import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as cardRef } from './card-base';
import { ref as mediaRef } from './nestable-contents/media-base';
import { ref as quickReplyRef } from './nestable-contents/quick-reply-list';
import { createComponentRef } from '../../../../utils/ref';

const card: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    $ref: cardRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'card',
      },
      media: {
        type: 'object',
        allOf: [{
          $ref: mediaRef,
        }, {
          type: 'object',
          properties: {
            disposition: {
              type: 'string',
              description: 'Controls where in the card the media will be shown, and some values also influence the media height.',
              enum: [
                'ON_THE_LEFT',
                'ON_THE_RIGHT',
                'ON_THE_TOP_SHORT_HEIGHT',
                'ON_THE_TOP_MEDIUM_HEIGHT',
                'ON_THE_TOP_TALL_HEIGHT',
              ],
              default: 'SHORT_HEIGHT_ON_THE_TOP',
            },
          },
        }],
      },
      quickReplyButtons: {
        $ref: quickReplyRef,
      },
    },
  },
  ],
};

export const ref = createComponentRef(__filename);
export default card;
