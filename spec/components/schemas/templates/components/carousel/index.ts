import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

import { ref as buttonURLRef } from '../buttons/button-item-url';
import { ref as buttonPhoneNumberRef } from '../buttons/button-item-phone-number';
import { ref as buttonQuickReplyRef } from '../buttons/button-item-quick-reply';

const carousel: SchemaObject = {
  title: 'Carousel',
  description: `A collection of cards horizontally scrollable.
        <br><br>*Only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
  type: 'object',
  required: ['type', 'cards'],
  properties: {
    type: {
      title: 'Cards type',
      description: 'The cards can beither fixed or unordered. An order for the unordered cards is defined upon dispatch of the template.',
      type: 'string',
      enum: ['CARD_FIXED','CARD_TEMPLATE'],
    },
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
            description: 'Where one or two buttons of type URL, Quick Reply or Phone Number shall be included',
            type: 'array',
            minItems: 1,
            maxItems: 2,
            items: {
              oneOf: [
                { $ref: buttonURLRef },
                { $ref: buttonPhoneNumberRef },
                { $ref: buttonQuickReplyRef },
              ],
            },
          },
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default carousel;
