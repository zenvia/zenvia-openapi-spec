import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const webhook: SchemaObject = {
  type: 'object',
  properties: {
    contentIndex: {
      title: 'Message Index',
      type: 'number',
    },
    timestamp: {
      title: 'Status timestamp',
      type: 'string',
      format: 'date-time',
    },
    code: {
      title: 'Status code',
      description: 'Code that indicates the message status',
      type: 'string',
      enum: [
        'REJECTED',
        'SENT',
        'DELIVERED',
        'NOT_DELIVERED',
        'READ',
      ],
    },
    description: {
      title: 'Status description',
      description: 'A description of status',
      type: 'string',
    },
    cause: {
      title: 'Status cause',
      description: 'A likely raw message with the information about the status',
      type: 'string',
    },
  },
  required: [
    'code',
    'timestamp',
  ],
};

export const ref = createComponentRef(__filename);
export default webhook;
