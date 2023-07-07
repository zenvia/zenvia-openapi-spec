import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as mtContentsRef } from '../content/whatsapp/mt';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: mtContentsRef,
        },
        minItems: 1,
      },
      idRef: {
        type: 'string',
        description: `Id of the message sent or received in the conversation channel to reference as a message reply.
        <br>*Only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
        example: '7390113b-e120-41b5-8a07-c4567726abc2',
      },
      contentRef: {
        type: 'number',
        description: `Index of the content in the message sent or received in the conversation channel to reference as a message reply.
        <br>If ommited, the index to reference will be \`0\` (the first content of the message).
        <br>*Only applicable to [WhatsApp](#tag/WhatsApp) channel.*`,
        default: 0,
        example: 1,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
