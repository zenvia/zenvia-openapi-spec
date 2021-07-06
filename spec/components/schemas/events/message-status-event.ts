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
          'MESSAGE',
          'MESSAGE_STATUS',
        ],
        example: 'MESSAGE_STATUS',
      },
      messageId: {
        title: 'Message ID',
        description: 'The ID of the message whose status is being delivered.',
        type: 'string',
      },
      contentIndex: {
        title: 'Content Index',
        description: 'Index of content that is receiving the status update.',
        type: 'number',
      },
      messageStatus: {
        $ref: messageStatusRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
