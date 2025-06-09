import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const unsupported: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'unsupported',
        description: 'Refers to a type of communication that is not supported by Meta.',
      },
    },
    required: ['type'],
  }],
};

export const ref = createComponentRef(__filename);
export default unsupported;
