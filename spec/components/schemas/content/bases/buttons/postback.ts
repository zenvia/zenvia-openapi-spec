import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const postback: SchemaObject = {
  type: 'object',
  description: 'Send back a text message event when the user clicks on the button.',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default postback;
