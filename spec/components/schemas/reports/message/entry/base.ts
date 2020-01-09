// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Entry object for Message Report',
  description: 'This is a entry object model for Message Report.',
  type: 'object',
  properties: {
    channel: {
      title: 'Channel',
      type: 'string',
      readOnly: true,
    },
    type: {
      title: 'Type of message',
      description: 'Type of message, that may be either "message" or "notification"',
      type: 'string',
      readOnly: true,
    },
    directionInTotal: {
      title: 'Total of "IN" messages',
      description: 'Counter to sum messages of IN direction.',
      type: 'number',
      readOnly: true,
    },
    directionOutTotal: {
      title: 'Total of "OUT" messages',
      description: 'Counter to sum messages of OUT direction',
      type: 'number',
      readOnly: true,
    },
    total: {
      title: 'Total of messages',
      description: 'Total of messages considering "IN" and "OUT" directions',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
