// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as messageStatusRef } from '../status/message-status';
import { createComponentRef } from '../../../../utils/ref';

const messageEvent: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      channel: {
        title: 'Message channel',
        type: 'string',
      },
      messageId: {
        title: 'Message ID',
        description: 'The ID of the message whose status is being delived',
        type: 'string',
      },
      messageStatus: {
        $ref: messageStatusRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
