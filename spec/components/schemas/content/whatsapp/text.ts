import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as textRef } from '../text';
import { ref as replyToRef } from '../reply-to';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: textRef,
  },
  {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default text;
