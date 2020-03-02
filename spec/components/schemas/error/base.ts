// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as errorsRef } from './errors';

const base: SchemaObject = {
  title: 'Error Object',
  description: 'This is a Error object model.',
  type: 'object',
  properties: {
    code: {
      title: 'Code',
      description: 'An error code to identify the error programmatically.',
      type: 'string',
      readOnly: true,
      example: 'VALIDATION_ERROR',
    },
    message: {
      title: 'Message',
      description: 'A human readable text to help on error troubleshoot.',
      type: 'string',
      readOnly: true,
      example: 'Validation error',
    },
    details: {
      title: 'Details',
      description: 'Error details to help identify the problem source.',
      type: 'array',
      readOnly: true,
      items: {
        $ref: errorsRef,
      },
    },
  },
  required: [
    'code',
    'message',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
