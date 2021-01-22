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
        example: 'Send us your location',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back as a message event when the user clicks the button.',
        example: 'help-requested',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default shareLocation;
