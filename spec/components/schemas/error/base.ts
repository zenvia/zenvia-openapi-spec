// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Error Object',
  description: 'This is a Error object model.',
  type: 'object',
  properties: {
    code: {
      title: 'Code',
      description: 'Error code.',
      type: 'string',
      readOnly: true,
    },
    description: {
      title: 'Description',
      description: 'Error description.',
      type: 'string',
      readOnly: true,
    },
  },
  required: [
    'code',
    'description',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
