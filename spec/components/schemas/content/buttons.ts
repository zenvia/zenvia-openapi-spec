import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as quickReplyRef } from './quickreply';
import { ref as buttonsRef } from './buttons-list/buttons-list';
import { createComponentRef } from '../../../../utils/ref';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'card',
      },
      label: {
        type: 'string',
        description: 'Card title.',
        example: 'example',
      },
      buttons: {
        type: 'array',
        description: 'Array of buttons displayed inside the card. The same used on Button Menu and Quick Reply.',
        items: {
          $ref: buttonsRef,
        },
      },
      quickReplyButtons: {
        type: 'array',
        description: 'Array of buttons displayed as quick reply.',
        items: {
          $ref: quickReplyRef,
        },
      },
    },
  },
  ],
};

export const ref = createComponentRef(__filename);
export default buttons;
