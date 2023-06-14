import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as locationRef } from '../location';
import { ref as replyToRef } from '../reply-to';

const location: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: locationRef,
  },
  {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default location;
