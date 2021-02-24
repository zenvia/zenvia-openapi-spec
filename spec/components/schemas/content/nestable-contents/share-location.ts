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
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default shareLocation;
