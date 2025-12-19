import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as conversationStatusBaseRef } from '../conversation-status-base';


const created: SchemaObject = {
  allOf: [
    { $ref: conversationStatusBaseRef },
    {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['CONVERSATION_CREATED'],
        },
      },
    },
  ],
};
export const ref = createComponentRef(__filename);
export default created;
