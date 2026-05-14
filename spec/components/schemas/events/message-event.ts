// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageRef } from '../message/allMo';

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
          'MESSAGE',
        ],
        example: 'MESSAGE',
      },
      channel: {
        title: 'Message Channel',
        type: 'string',
      },
      direction: {
        title: 'Message Direction',
        description: `Indicates whether the message is received from a channel (**IN**), sent to a channel (**OUT**), or both (**ALL**).

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
      message: {
        $ref: messageRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
