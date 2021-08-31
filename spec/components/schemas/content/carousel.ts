import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as cardRef } from './bases/card-base';
import { ref as mediaRef } from './bases/card-media-base';
import { ref as quickReplyRef } from './bases/quick-reply-list';
import { createComponentRef } from '../../../../utils/ref';

const carousel: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'carousel',
      },
      cardWidth: {
        type: 'string',
        description: 'The card width, which is always smaller than the width of the standalone card. The standard card width would be the equivalent of *LARGE* if it were available for use for the cards of the carousel.',
        enum: [
          'SMALL',
          'MEDIUM',
        ],
        default: 'MEDIUM',
      },
      cards: {
        description: 'The sequence of cards to be shown in the carousel',
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          type: 'object',
          allOf: [{
            $ref: cardRef,
          }, {
            type: 'object',
            properties: {
              media: {
                type: 'object',
                allOf: [{
                  $ref: mediaRef,
                }, {
                  type: 'object',
                  properties: {
                    disposition: {
                      type: 'string',
                      enum: [
                        'ON_THE_TOP_SHORT_HEIGHT',
                        'ON_THE_TOP_MEDIUM_HEIGHT',
                        'ON_THE_TOP_TALL_HEIGHT',
                      ],
                    },
                  },
                }],
              },
            },
          }],
        },
      },
      quickReplyButtons: {
        $ref: quickReplyRef,
      },
    },
    required: [
      'type',
      'cards',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default carousel;
