import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const eventBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Event Id',
      description: 'ID of the webhook event. Can be used to identify retried deliveries in case of webhook errors.',
      type: 'string',
    },
    timestamp: {
      title: 'Event Timestamp',
      description: 'Timestamp of the webhook event',
      type: 'string',
      format: 'date-time',
    },
    type: {
      title: 'Event type',
      type: 'string',
      enum: [
        'CONVERSATION_STATUS',
        'CONVERSATION_MESSAGE',
      ],
    },
    subscriptionId: {
      title: 'Subscription ID',
      type: 'string',
    },
    subscriptionStatus: {
      title: 'Subscription Status',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default eventBase;
