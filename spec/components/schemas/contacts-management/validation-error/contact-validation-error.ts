import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const validationErrorSchema: SchemaObject = {
  title: 'ValidationError',
  type: 'object',
  required: ['code', 'message'],
  properties: {
    code: {
      type: 'string',
      description: 'Type of error.',
    },
    message: {
      type: 'string',
      description: 'Error type message',
    },
    details: {
      type: 'array',
      description: 'Fields involved in the validation error.',
      properties: {
        code: {
          type: 'string',
          description: 'Error code',
        },
        path: {
          type: 'string',
          description: 'The property path with error',
        },
        message: {
          type: 'string',
          description: 'Detailed error type message',
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default validationErrorSchema;
