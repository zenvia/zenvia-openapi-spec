import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const eventBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Event Id',
      description: 'Id of the webhook event. Can be used to identify redeliveries in case of webhook errors.',
      type: 'string',
    },
    timestamp: {
      title: 'Event Timestamp',
      description: 'The timestamp of the webhook event.',
      type: 'string',
      format: 'date-time',
    },
    type: {
      title: 'Event type',
      type: 'string',
      enum: [
        'MESSAGE',
        'MESSAGE_STATUS',
      ],
    },
    subscriptionId: {
      title: 'Webhook Id',
      description: 'Id of the webhook that caused this event to be delivered.',
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
