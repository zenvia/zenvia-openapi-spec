// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  properties: {
    id: {
      title: 'Batch ID',
      description: 'Batch identifier created automatically',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Batch Name',
      description: 'Batch identification name',
      type: 'string',
    },
    channel: {
      title: 'Channel',
      description: 'Message channel',
      type: 'string',
    },
    starndardAnswer: {
      title: 'Standard Answer',
      description: 'Standard answer to be sent if recipient to reply the message sent',
      type: 'string',
    },
  },
  required: [
    'name',
    'channel',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
