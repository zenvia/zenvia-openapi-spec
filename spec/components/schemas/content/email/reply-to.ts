import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as contactRef } from './recipient';

const type: SchemaObject = {
  title: 'Reply To',
  allOf: [{
    type: 'object',
    description: 'E-mail that will be set as recipient when a e-mail response is initiated.',
  }, {
    $ref: contactRef,
  }],
  example: { email: 'reply-to@zenvia.com', name: 'Service Care' },
};

export const ref = createComponentRef(__filename);
export default type;
