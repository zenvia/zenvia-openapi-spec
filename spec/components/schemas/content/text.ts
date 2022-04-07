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
        description: 'Text to be sent. When a URL is sent in the text, a preview url will be added to the message.',
        type: 'string',
        example: 'This is a text.',
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
