import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const createResponse: SchemaObject = {
  title: 'Conversation created',
  description: 'The identifier and initial status of the created (or reused) conversation.',
  type: 'object',
  properties: {
    id: {
      title: 'Id',
      description: 'The conversation identifier.',
      type: 'string',
      readOnly: true,
    },
    status: {
      title: 'Status',
      description: 'The status of the conversation right after creation.',
      type: 'string',
      enum: [
        'CONVERSATION_CREATED', 'QUEUED', 'STARTED', 'CLAIMED',
        'DISTRIBUTED_TO_USER', 'TRANSFERRED', 'SNOOZED', 'UNSNOOZED', 'CLOSED',
      ],
      readOnly: true,
      example: 'CONVERSATION_CREATED',
    },
  },
  required: [
    'id',
    'status',
  ],
};

export const ref = createComponentRef(__filename);
export default createResponse;
