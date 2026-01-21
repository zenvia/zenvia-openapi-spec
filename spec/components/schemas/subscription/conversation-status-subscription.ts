import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [
    {
      $ref: baseRef,
    },
    {
      type: 'object',
      properties: {
        eventType: {
          type: 'string',
          enum: ['CONVERSATION_STATUS'],
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default subscription;
