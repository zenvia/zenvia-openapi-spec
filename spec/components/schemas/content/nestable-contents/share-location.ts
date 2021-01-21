import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const shareLocation: SchemaObject = {
  type: 'object',
  description: "Opens the default app for maps on the user's device and requests the user's location.",
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
        description: 'Content to be sent back to the Agent when the user clicks the button.',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default shareLocation;
