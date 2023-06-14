import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'text',
      },
      text: {
        description: `Text to be sent. When a URL is sent in the text, a URL preview will be added to the message, if the channel supports it.
          <br>*URL preview only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
        type: 'string',
        example: 'This is a text.',
      },
      context: {
        description: 'Contextual information related to the message. It can include references to the sent or received message in WhatsApp and the index of the sent or received content.',
        type: 'object',
        messageId: {
          type: 'string',
          description: 'Reference to the sent or received message in WhatsApp',
          example: 'wamid.Zy3x2Yz1Z2Xz3yzxxyZZZ3zxxYZZXyZZ1Z3yzxy2Yxz==',
        },
        contentIndex: {
          type: 'number',
          description: 'Reference to the index of the sent or received content',
          example: 1,
        },
        required: [
          'messageId',
          'contentIndex',
        ],
      },
      payload: {
        description: 'Payload of selected button',
        type: 'string',
        readOnly: true,
      },
    },
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default text;
