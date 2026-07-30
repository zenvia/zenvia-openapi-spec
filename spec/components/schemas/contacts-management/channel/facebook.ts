// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Facebook',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['facebook'],
      example: 'facebook',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s Facebook ID.',
      type: 'string',
      pattern: '^[a-zA-Z0-9._@-]+$',
      example: 'user.name.123',
    },
  },
  required: ['type', 'id'],
};

export const ref = createComponentRef(__filename);
export default base;
