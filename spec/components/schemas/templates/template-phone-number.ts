// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        title: 'Button text',
        description: 'Text that will fill the button',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone number of button',
        description: 'Phone number to be sent in the button',
        type: 'string',
      },
    },
    required: [
      'text',
      'phoneNumber',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default buttons;
