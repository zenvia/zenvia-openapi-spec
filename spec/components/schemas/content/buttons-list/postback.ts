// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

const postback: SchemaObject = {
  type: 'object',
  description: 'Sends the payload content to the Agent (similar to Omni-chat)',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent to the Agent when the user clicks the button.',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default postback;