import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as cardRef } from './bases/card-base';
import { ref as mediaRef } from './bases/card-media-base';
import { ref as quickReplyRef } from './bases/quick-reply-list';
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
              default: 'ON_THE_TOP_SHORT_HEIGHT',
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
