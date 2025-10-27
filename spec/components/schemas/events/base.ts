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
        'MESSAGE',
        'MESSAGE_STATUS',
        'SUPPORT_EXPERT_AGENT',
      ],
    },
    subscriptionId: {
      title: 'Webhook ID',
      description: 'ID of the webhook that caused this event to be delivered',
      type: 'string',
    },
    channel: {
      title: 'Message Channel',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default eventBase;
