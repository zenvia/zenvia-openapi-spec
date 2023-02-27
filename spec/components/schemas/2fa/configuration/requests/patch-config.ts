import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const patchConfig: SchemaObject = {
  title: 'Patch configuration',
  type: 'object',
  description: 'Patch configuration',
  properties: {
    op: {
      type: 'string',
      description: 'Token configuration update operation type',
      enum: ['replace', 'add', 'remove'],
      example: 'replace',
    },
    path: {
      type: 'string',
      description: 'The path inside the token configuration object',
      example: '/token',
    },
    value: {
      type: 'object',
      description: 'The value to replace, add, or remove',
      example: {
        'size': 6,
        'mode': 'NUMBER',
        'case': 'UPPER_ONLY',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default patchConfig;
