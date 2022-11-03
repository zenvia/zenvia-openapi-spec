import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../../../utils/ref';

const textHeader: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'text',
      },
      text: {
        type: 'string',
        title: 'Header text',
        example: 'Header text',
        minLength: 1,
        maxLength: 60,
      },
    },
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default textHeader;
