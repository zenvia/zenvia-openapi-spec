import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [
    {
      $ref: baseRef,
    },
    {
      type: 'object',
      properties: {
        id: {
          title: 'ID',
          type: 'string',
        },
        eventType: {
          title: 'Event type to subscribe',
          type: 'string',
          enum: [
            'CONVERSATION_STATUS',
          ],
        },
      },
    },
  ],
};

export const ref = createComponentRef(__filename);
export default subscription;
