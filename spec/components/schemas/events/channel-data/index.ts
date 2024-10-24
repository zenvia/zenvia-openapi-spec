import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as smsRef } from './sms';
import { ref as rcsRef } from './rcs';
import { ref as emailRef } from './email';

const channelData: SchemaObject = {
  type: 'object',
  title: 'Channel Data',
  description: 'Channel specific details about the message.',
  properties: {
    sms: { $ref: smsRef },
    rcs: { $ref: rcsRef },
    email: { $ref: emailRef },
  },
};

export const ref = createComponentRef(__filename);
export default channelData;
