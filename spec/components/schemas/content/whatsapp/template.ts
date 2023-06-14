import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as templateRef } from '../template';
import { ref as replyToRef } from '../reply-to'

const template: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: templateRef
  },
  {
    $ref: replyToRef
  }],
};

export const ref = createComponentRef(__filename);
export default template;
