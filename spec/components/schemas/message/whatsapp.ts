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
        description: 'Reference to the sent or received message in WhatsApp',
        example: 'ZYYxZz1xzzz-xXzz-xzXz-Zy3x-ZYYxZz1xzzz',
      },
      contentRef: {
        type: 'number',
        description: 'Reference to the index of the sent or received content. If ommited, the reference will be made to the first content of the message',
        example: 1,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
