import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const verification: SchemaObject = {
  type: 'object',
  properties: {
    to: {
      type: 'string',
      description: 'User recipient',
      example: 'email@email.com',
    },
    channel: {
      type: 'string',
      description: 'Channel used',
      example: 'email',
    },
    code: {
      type: 'string',
      description: 'Code sent by the user',
      example: '269878',
    },
  },
  required: ['to', 'channel', 'code'],
};

export const ref = createComponentRef(__filename);
export default verification;
