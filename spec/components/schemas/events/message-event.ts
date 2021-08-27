// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';
import { ref as messageRef } from '../message/all';

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
          'MESSAGE_STATUS',
        ],
        example: 'MESSAGE',
      },
      direction: {
        title: 'Message Direction',
        description: `Indicates whether the message is incoming (IN) or outgoing (OUT)
> **Note:** The **OUT** direction is under construction.`,
        type: 'string',
        enum: [
          'IN',
          'OUT',
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
