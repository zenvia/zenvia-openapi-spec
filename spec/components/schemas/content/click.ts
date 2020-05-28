import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const click: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        description: 'Text of button selected',
        type: 'string',
      },
      payload: {
        description: 'Payload of button selected',
        type: 'string',
      },
    },
    required: [
      'text',
      'payload',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default click;
