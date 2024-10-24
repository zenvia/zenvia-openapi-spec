import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const rcs: SchemaObject = {
  type: 'object',
  title: 'RCS',
  description: 'RCS specific details about the message',
  properties: {
    realChannel: {
      title: 'Channel that sent the message on fallback.',
      type: 'string',
      enum: [
        'sms',
        'rcs',
      ],
    },
  },
};

export const ref = createComponentRef(__filename);
export default rcs;
