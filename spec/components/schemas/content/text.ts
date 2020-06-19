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
      text: {
        description: 'Text to be sent. Example: \"This is a text\".',
        type: 'string',
      },
      payload: {
        description: 'Payload of selected button',
        type: 'string',
      },
    },
    required: [
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default text;
