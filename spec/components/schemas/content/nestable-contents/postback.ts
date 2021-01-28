import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const postback: SchemaObject = {
  type: 'object',
  description: 'Sends the payload content to the Agent (similar to Omni-chat)',
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
