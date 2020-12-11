import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as buttonsRef } from './nestable-contents/buttons-list';
import { ref as quickReplyRef } from './nestable-contents/quick-reply-list';
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
        description: 'Card width, which can be SMALL (with 120 DP) or MEDIUM (232 DP). Default value: SMALL',
        example: 'SMALL',
      },
      carousel: {
        description: 'A list of cards',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              description: 'Text to be displayed inside the card.',
              example: 'Hello',
            },
            label: {
              type: 'string',
              description: 'Carousel title.',
              example: 'example',
            },
            imageUrl: {
              type: 'string',
              description: 'Public URL of media file, which can be an image, a GIF or a video, associated with the card.',
              example: 'https://fooo.bar/image',
            },
            thumbnailUrl: {
              type: 'string',
              description: 'Public URL of media thumbnail file. If not sent, Google will generate it based on the imageUrl.',
              example: 'https://fooo.bar/image',
            },
            imageDescription: {
              type: 'string',
              description: 'Media content description, used by screen readers to help users with disability to understand the context.',
              example: '',
            },
            height: {
              type: 'string',
              description: 'Average height when the card layout is VERTICAL. The height can be SHORT (with 112 DP), MEDIUM (168 DP) or TALL (com 264 DP). When the card layout is HORIZONTAL this field will be ignored. Default value: SHORT',
              example: 'SHORT',
            },
            buttons: {
              type: 'array',
              description: 'Array of buttons displayed inside the card. The same used on Button Menu and Quick Reply.',
              items: {
                $ref: buttonsRef,
              },
            },
          },
          required: [
            'buttons',
          ],
        }          
      }, 
      quickReplyButtons: {
        type: 'array',
        description: 'Array of buttons displayed as quick reply.',
        items: {
          $ref: quickReplyRef,
        },
      },     
    },
    required: [
      'type',
      'carousel',
      'quickReplyButtons'
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default carousel;
