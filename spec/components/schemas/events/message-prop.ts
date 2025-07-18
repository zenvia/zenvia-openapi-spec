// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Object',
  description: 'This is a Message object model',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      type: 'string'
    },
    from: {
      title: 'from',
      type: 'string'
    },
    to: {
      title: 'to',
      type: 'string'
    },
    direction: {
      title: 'Message Direction',
      description: `Indicates whether the message is received from a channel (IN) or sent to a channel (OUT)
                        > **Note:** The **OUT** direction is under construction.`,
      type: 'string',
      enum: [
        'IN',
        'OUT',
      ],
    },
    channel: {
      title: 'channel',
      type: 'string'
    },
    contents: {
      title: 'contents',
      type: 'array'
    },
    timestamp: {
      title: 'timestamp',
      type: 'string'
    },
  }
};

export const ref = createComponentRef(__filename);
export default base;
