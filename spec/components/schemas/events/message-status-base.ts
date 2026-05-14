import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as errorCauseRef } from './error-cause';
import { ref as contextRef } from './context';
import { ref as channelDataRef } from './channel-data';

const messageStatusBase: SchemaObject = {
  type: 'object',
  properties: {
    code: {
      title: 'Status code',
      description: 'Code that indicates the message status',
      type: 'string',
    },
    timestamp: {
      title: 'Status timestamp',
      description: 'Timestamp of the message status. Usually received from the provider of the channel.',
      type: 'string',
      format: 'date-time',
    },
    channel: {
      title: 'Message Channel',
      type: 'string',
    },
    description: {
      title: 'Status description',
      description: 'A description of status',
      type: 'string',
    },
    direction: {
        title: 'Message Status Direction',
        description: `Indicates whether the message status is received from a channel (**IN**) or sent to a channel (**OUT**).

* **IN**: Received messages.
* **OUT**: Sent messages.`,
        type: 'string',
        enum: [
          'IN',
          'OUT',
        ],
      },
    causes: {
      title: 'Status causes',
      description: 'A list of errors or cause of status',
      type: 'array',
      items: {
        $ref: errorCauseRef,
      },
    },
    context: {
      $ref: contextRef,
    },
    channelData: {
      $ref: channelDataRef,
    },
  },
  required: [
    'code',
    'timestamp',
  ],
};

export const ref = createComponentRef(__filename);
export default messageStatusBase;
