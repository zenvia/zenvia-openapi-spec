// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Twitter',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['twitter'],
      example: 'twitter',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s Twitter handle.',
      type: 'string',
      pattern: '^@[a-zA-Z0-9_]{1,15}$',
      example: '@username',
    },
  },
  required: ['type', 'id'],
};

export const ref = createComponentRef(__filename);
export default base;
