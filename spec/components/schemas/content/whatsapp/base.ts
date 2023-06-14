import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const contentWhatsappBase: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      context: {
        description: 'Contextual information related to the message. It can include references to the sent or received message in WhatsApp and the index of the sent or received content.',
        type: 'object',
        messageId: {
          type: 'string',
          description: 'Reference to the sent or received message in WhatsApp',
          example: 'ZYYxZz1xzzz-xXzz-xzXz-Zy3x-ZYYxZz1xzzz',
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
    },
  }]
}

export const ref = createComponentRef(__filename);
export default contentWhatsappBase;
