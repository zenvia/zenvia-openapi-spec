import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

import { ref as actionsRef } from './buttons/actions';
import { ref as quickRepliesRef } from './buttons/quick-replies';
import { ref as mixedRef } from './buttons/mixed';

const carousel: SchemaObject = {
  title: 'Carousel',
  description: `A collection of cards horizontally scrollable.
        <br><br>*Only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
  type: 'object',
  required: ['cards'],
  properties: {
    cards: {
      title: 'Cards',
      description: 'A boxed media that contains text, buttons and an image.',
      type: 'array',
      minItems: 2,
      maxItems: 10,
      items: {
        type: 'object',
        required: ['header', 'body', 'buttons'],
        properties: {
          header: {
            title: 'Card header',
            description: 'Where the card image will be placed',
            required: ['type'],
            properties: {
              type: {
                title: 'Type of header for the card',
                type: 'string',
                enum: ['MEDIA_IMAGE','MEDIA_VIDEO'],
              },
            },
          },
          body: {
            title: 'Card body',
            required: ['type', 'text'],
            description: 'Where the card text will be inserted',
            properties: {
              type: {
                title: 'Card body type',
                type: 'string',
                enum: ['TEXT_FIXED','TEXT_TEMPLATE'],
              },
              text: {
                title: 'Card body text',
                type: 'string',
              },
            },
          },
          buttons: {
            title: 'Card buttons',
            description: 'Buttons of type URL, Quick Reply and Phone Number',
            type: 'object',
            oneOf: [{
              $ref: actionsRef,
            }, {
              $ref: quickRepliesRef,
            }, {
              $ref: mixedRef,
            }],
            required: ['type'],
            discriminator: {
              propertyName: 'type',
              mapping: {
                ACTIONS: actionsRef,
                QUICK_REPLIES: quickRepliesRef,
                MIXED: mixedRef,
              },
            },
          },
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default carousel;
