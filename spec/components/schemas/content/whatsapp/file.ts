import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as fileRef } from '../file';
import { ref as replyToRef } from '../reply-to'

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: fileRef
  },
  {
    $ref: replyToRef
  }],
};

export const ref = createComponentRef(__filename);
export default file;
