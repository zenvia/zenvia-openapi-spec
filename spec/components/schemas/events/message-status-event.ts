// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as messageStatusRef } from './message-status';
import { createComponentRef } from '../../../../utils/ref';

const messageEvent: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        title: 'Event type',
        type: 'string',
        enum: [
          'MESSAGE_STATUS',
        ],
        example: 'MESSAGE_STATUS',
      },
      channel: {
        title: 'Message Channel',
        type: 'string',
      },
      direction: {
        title: 'Message Status Direction',
        description: `Indicates whether the message status is received from a channel (**IN**), sent to a channel (**OUT**), or both (**ALL**).

* **IN**: Received messages.
* **OUT**: Sent messages.
* **ALL**: Filters messages from both directions.`,
        type: 'string',
        enum: [
          'IN',
          'OUT',
          'ALL',
        ],
      },
      messageId: {
        title: 'Message ID',
        description: 'ID of the message whose status is being delivered',
        type: 'string',
        deprecated: true,
      },
      contentIndex: {
        title: 'Content Index',
        description: 'Index of content that is receiving the status update',
        type: 'number',
        deprecated: true,
      },
      message: {
        properties: {
          id: {
            title: 'Message ID',
            description: 'ID of the message whose status is being delivered',
            type: 'string',
          },
          externalId: {
            title: 'Message External ID',
            description: 'A customizable identifier for dispatches, allowing users to customize and track their dispatches within the API',
            type: 'string',
          },
          contentIndex: {
            title: 'Content Index',
            description: 'Index of content that is receiving the status update',
            type: 'number',
          },
          from: {
            type: 'string',
            description: 'Contact of origin',
            example: 'email@email.com',
          },
          to: {
            type: 'string',
            description: 'Recipient contact',
            example: 'received_email@email.com',
          },
        },
      },
      messageStatus: {
        $ref: messageStatusRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
