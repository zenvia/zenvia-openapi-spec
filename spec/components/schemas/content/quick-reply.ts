import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as quickReplyRef } from './nestable-contents/quick-reply-list';
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
      text: {
        type: 'string',
        description: 'Text to be sent',
        example: 'This is a text',
      },
      quickReplyButtons: {
        type: 'array',
        description: 'Array of buttons displayed as quick reply. The same used on Button Menu and Quick Reply.',
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
