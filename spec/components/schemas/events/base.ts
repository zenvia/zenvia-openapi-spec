import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as webhookSchemaRef } from '../subscription/webhook';

const eventBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Event Id',
      type: 'string',
    },
    timestamp: {
      title: 'Event Timestamp',
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
    webhook: {
      $ref: webhookSchemaRef,
    },
    subscriptionId: {
      title: 'Subscription Id',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default eventBase;
