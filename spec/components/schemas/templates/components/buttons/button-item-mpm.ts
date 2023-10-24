// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const mpmButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        title: 'Text of button',
        description: 'This field is static with the value of "view items"',
        type: 'string',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default mpmButton;
