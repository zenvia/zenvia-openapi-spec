import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as replyToRef } from '../../../content/email/reply-to';

const email: SchemaObject = {
  type: 'object',
  title: 'Email',
  description: `E-mail specific fields.
                <br>*Only applicable to [E-Mail](#tag/E-Mail) channel.*`,
  properties: {
    replyTo: {
      allOf: [{
        $ref: replyToRef,
      }],
    },
  },
};

export const ref = createComponentRef(__filename);
export default email;
