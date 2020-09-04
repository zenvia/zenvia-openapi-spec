// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  properties: {
    id: {
      title: 'Message ID',
      description: 'An ID for this message. This can be used for future message consulting or callback notifications.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Batch Name',
      description: 'Batch identification name sent',
      type: 'string',
    },
    channel: {
      title: 'Channel',
      description: 'Message channel',
      type: 'string',
    },
    contacts: {
      type: 'object',
    },
    columnMap: {
      type: 'object',
    },
  },
  required: [
    'name',
    'channel',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
