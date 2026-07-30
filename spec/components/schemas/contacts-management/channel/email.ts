// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'E-mail',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['email'],
      example: 'email',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s e-mail address.',
      type: 'string',
      example: 'contact@domain.example',
    },
  },
  required: ['type', 'id'],
};

export const ref = createComponentRef(__filename);
export default base;
