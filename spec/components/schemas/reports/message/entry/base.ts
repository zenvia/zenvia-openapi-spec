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
      title: 'Type of messages',
      description: 'The type of messages, which may be either "message" or "notification".',
      type: 'string',
      readOnly: true,
    },
    directionInTotal: {
      title: 'The total of IN messages',
      description: 'Counter to sum messages of IN direction.',
      type: 'number',
      readOnly: true,
    },
    directionOutTotal: {
      title: 'The total of OUT messages',
      description: 'Counter to sum messages of OUT direction.',
      type: 'number',
      readOnly: true,
    },
    total: {
      title: 'The total of messages',
      description: 'The total of messages including IN and OUT directions.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
