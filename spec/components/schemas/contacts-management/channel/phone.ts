// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Phone',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['phone'],
      example: 'phone',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s phone number.',
      type: 'string',
      pattern: '^[0-9]+$',
      example: '5510888883333',
    },
    idType: {
      title: 'ID Type',
      description: 'Type of the phone number. Values are case-insensitive.',
      type: 'string',
      enum: ['landline', 'mobile', 'LANDLINE', 'MOBILE'],
      example: 'mobile',
    },
  },
  required: ['type', 'id', 'idType'],
};

export const ref = createComponentRef(__filename);
export default base;
