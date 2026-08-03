// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Instagram',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['instagram'],
      example: 'instagram',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s Instagram ID.',
      type: 'string',
      pattern: '^[a-zA-Z0-9._-]+$',
      example: 'user_name',
    },
    username: {
      title: 'Username',
      description: 'Username associated with the channel.',
      type: 'string',
      example: '@username',
    },
  },
  required: ['type', 'id'],
};

export const ref = createComponentRef(__filename);
export default base;
