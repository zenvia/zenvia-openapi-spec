import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const dial: SchemaObject = {
  type: 'object',
  description: "It opens the default dial app on the user's device.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      phoneNumber: {
        type: 'string',
        description: 'Phone Number (E.164 format).',
        example: '+558006464777',
      },
    },
    required: [
      'type',
      'text',
      'phoneNumber',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default dial;
