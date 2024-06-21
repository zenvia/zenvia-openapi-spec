import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as smsRef } from './sms';

const channelData: SchemaObject = {
  type: 'object',
  title: 'Channel Data',
  description: 'Channel specific details about the message.',
  properties: {
    sms: {
      $ref: smsRef,
    },
    rcs: {
      type: 'object',
      title: 'RCS',
      description: 'RCS specific details about the message',
      properties: {
        realChannel: {
          title: 'Channel that sent the message on fallback.',
          type: 'string',
          enum: [
            'SMS',
            'RCS',
          ],
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default channelData;
