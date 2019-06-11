import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      payload: { type: 'object' },
    },
    required: [
      'payload',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default file;
