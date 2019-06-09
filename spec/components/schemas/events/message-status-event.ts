// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
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
        type: 'string',
      },
      messageStatus: {
        title: 'Message Status',
        type: 'string',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
