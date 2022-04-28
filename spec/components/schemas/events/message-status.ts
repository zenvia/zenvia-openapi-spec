import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as errorCauseRef } from './error-cause';
import { ref as contextRef } from './context';
import { ref as channelDataRef } from './channel-data';

const webhook: SchemaObject = {
  type: 'object',
  title: 'Message Status',
  properties: {
    timestamp: {
      title: 'Status timestamp',
      description: 'Timestamp of the message status. Usually received from the provider of the channel.',
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
        'DELETED',
        'CLICKED',
        'VERIFIED',
      ],
    },
    description: {
      title: 'Status description',
      description: 'A description of status',
      type: 'string',
    },
    causes: {
      title: 'Status causes',
      description: 'A list of errors or cause of status',
      type: 'array',
      items: {
        $ref: errorCauseRef,
      },
    },
    context: {
      $ref: contextRef,
    },
    channelData: {
      $ref: channelDataRef,
    },
  },
  required: [
    'code',
    'timestamp',
  ],
};

export const ref = createComponentRef(__filename);
export default webhook;
