// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as channelRef } from '../message/channel';
import { createComponentRef } from '../../../../utils/ref';

const webhook: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      criteria: {
        type: 'object',
        properties: {
          channel: {
            $ref: channelRef,
          },
          direction: {
            title: 'Message direction',
            description: 'It indicates if message is received from channel (IN) or is sent to channel (OUT)',
            type: 'string',
            enum: [
              'IN',
              'OUT',
            ],
          },
        },
        required: ['channel'],
      },
    },
    required: ['criteria'],
  }],
};

export const ref = createComponentRef(__filename);
export default webhook;
