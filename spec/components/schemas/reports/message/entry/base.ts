// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Entry object for Message Report',
  description: 'The entry object model for Message Report.',
  type: 'object',
  properties: {
    channel: {
      title: 'Channel',
      type: 'string',
      readOnly: true,
    },
    type: {
      title: 'Message type',
      description: 'The type of messages, which may be either "message" or "notification".',
      type: 'string',
      readOnly: true,
    },
    directionInTotal: {
      title: 'IN messages total',
      description: 'The total of IN direction messages.',
      type: 'number',
      readOnly: true,
    },
    directionOutTotal: {
      title: 'OUT messages total',
      description: 'The total of OUT direction messages.',
      type: 'number',
      readOnly: true,
    },
    total: {
      title: 'Messages total',
      description: 'The total of messages including IN and OUT directions.',
      type: 'number',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
