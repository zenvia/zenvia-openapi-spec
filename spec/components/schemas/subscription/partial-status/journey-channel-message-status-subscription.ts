import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';

const subscription: SchemaObject = {
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
            title: 'Channel',
            description: 'Channel of the messages sent by the journeys',
            type: 'string',
            enum: [
              'sms',
              'email',
              'whatsapp',
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
export default subscription;
