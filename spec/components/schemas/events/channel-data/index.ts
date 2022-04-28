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
  },
};

export const ref = createComponentRef(__filename);
export default channelData;
