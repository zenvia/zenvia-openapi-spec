// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const phoneNumberButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      phoneNumber: {
        title: 'Phone number of button',
        description: 'Phone number to be sent in the button',
        type: 'string',
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
export default phoneNumberButton;
