import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

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
      description: 'Code sended by the user',
      example: '269878',
    },
  },
};

export const ref = createComponentRef(__filename);
export default verification;
