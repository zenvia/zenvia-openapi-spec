import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const recipient: SchemaObject = {
  type: 'object',
  properties: {
    to: {
      type: 'string',
      description: 'User recipient',
      example: 'email@email.com',
    },
    channel: {
      type: 'string',
      description: 'Channel used to send the token',
      example: 'email',
    },
  },
  required: ['to', 'channel'],
};

export const ref = createComponentRef(__filename);
export default recipient;
