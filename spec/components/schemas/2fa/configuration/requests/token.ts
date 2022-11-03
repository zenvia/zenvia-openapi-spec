import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const token: SchemaObject = {
  title: 'Token properties',
  description: 'Information about the token properties',
  type: 'object',
  properties: {
    size: {
      title: 'Token size',
      type: 'number',
      description: 'Size of the token to be sent to the user',
      example: '6',
      maximum: 12,
      minimum: 6,
    },
    mode: {
      title: 'Token mode',
      type: 'string',
      description: 'Indicates the type of the token to be sent',
      enum: ['NUMBER', 'ALPHANUMERIC', 'ALPHANUMERIC_SUBSET'],
      default: 'NUMBER',
      example: 'NUMBER',
    },
    case: {
      title: 'String case type',
      description: 'Type of the token case',
      type: 'string',
      enum: ['UPPER_ONLY', 'LOWER_ONLY', 'MIXED'],
      default: 'UPPER_ONLY',
      example: 'UPPER_ONLY',
    },
  },
  required: ['size', 'mode', 'case'],
};

export const ref = createComponentRef(__filename);
export default token;
