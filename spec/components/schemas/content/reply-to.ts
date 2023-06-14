import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const replyTo: SchemaObject = {
  type: 'object',
  properties: {
    replyTo: {
      description: 'Contextual information replying to some previous message. It may include references to the message sent or received on WhatsApp and the content of the content sent or received.',
      type: 'object',
      properties: {
        messageId: {
          type: 'string',
          description: 'Reference to the sent or received message in WhatsApp',
          example: 'ZYYxZz1xzzz-xXzz-xzXz-Zy3x-ZYYxZz1xzzz',
        },
        contentIndex: {
          type: 'number',
          description: 'Reference to the index of the sent or received content. If ommited, the reference will be made to the first content of the message',
          example: 1,
        },
      },
      required: [
        'messageId',
        'contentIndex',
      ],
    },
  }
}

export const ref = createComponentRef(__filename);
export default replyTo;
