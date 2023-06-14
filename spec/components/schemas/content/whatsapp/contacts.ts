import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as contactsRef } from '../contacts';
import { ref as replyToRef } from '../reply-to';

const contacts: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: contactsRef,
  },
  {
    $ref: replyToRef,
  }],
};

export const ref = createComponentRef(__filename);
export default contacts;
