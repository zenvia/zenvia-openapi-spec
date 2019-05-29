import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const subscriptionBase: SchemaObject = {
  type: 'object',
  properties: {
    eventType: {
      title: 'Event type to subscribe',
      type: 'string',
      enum: [
        'MESSAGE',
      ],
    },
    webhook: {
      type: 'object',
      properties: {
        url: {
          title: 'Webhook URL',
          description: 'URL to post events',
          type: 'string',
        },
        headers: {
          title: 'Request headers',
          type: 'object',
        },
      },
      required: [
        'url',
      ],
    },
  },
  required: [
    'eventType',
    'webhook',
  ],
};

export const ref = createComponentRef(__filename);
export default subscriptionBase;
