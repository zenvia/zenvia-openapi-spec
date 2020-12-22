// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

const dial: SchemaObject = {
  type: 'object',
  description: "Opesn the default dial opp on the user's device.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.',
      },
      phoneNumber: {
        type: 'string',
        description: 'Phone Number (E.164 format).',
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
export default dial;
