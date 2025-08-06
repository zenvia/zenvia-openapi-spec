import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as webhookSchemaRef } from './webhook';
import { ref as statusRef } from './status';

const subscriptionBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Subscription Id',
      type: 'string',
      readOnly: true,
    },
    eventType: {
      title: 'Event type to subscribe',
      type: 'string',
      enum: [
        'MESSAGE',
        'MESSAGE_STATUS',
        'CONVERSATION_STATUS',
        'CONVERSATION_MESSAGE',
      ],
    },
    webhook: {
      allOf: [{
        $ref: webhookSchemaRef,
      }, {
        type: 'object',
        required: ['url'],
      }],
    },
    status: {
      $ref: statusRef,
    },
    version: {
      title: 'Version of subscription',
      type: 'string',
      enum: [
        'v1',
        'v2',
      ],
      default: 'v2',
    },
    createdAt: {
      title: 'Creation timestamp',
      description: 'Creation timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
    updatedAt: {
      title: 'Update timestamp',
      description: 'Update timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
  },
  required: [
    'eventType',
    'webhook',
  ],
};

export const ref = createComponentRef(__filename);
export default subscriptionBase;
