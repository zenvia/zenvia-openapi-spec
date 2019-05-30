import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const error: SchemaObject = {
  title: 'Error object',
  description: 'This is a Error object schema.',
  type: 'object',
  properties: {
    code: {
      title: 'Code',
      description: 'Code error.',
      type: 'string',
      readOnly: true,
    },
    message: {
      title: 'Message',
      description: 'Error message.',
      type: 'string',
      readOnly: true,
    },
  },
  required: [
    'code',
    'message',
  ],
};

export const ref = createComponentRef(__filename);
export default error;
