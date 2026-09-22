import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const transferRequest: SchemaObject = {
  title: 'Transfer conversation request',
  description: 'Transfers the conversation to another user or group. Transferring to a user answers 200 synchronously; transferring to a group answers 202 and the conversation is queued for distribution.',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'The transfer target type.',
      type: 'string',
      enum: ['USER', 'GROUP'],
    },
    userId: {
      title: 'User id',
      description: 'The destination agent. Required when type is USER.',
      type: 'string',
    },
    groupId: {
      title: 'Group id',
      description: 'The destination group. Always required: when type is USER, it is the group the destination agent is being transferred within.',
      type: 'string',
    },
  },
  required: [
    'type',
    'groupId',
  ],
};

export const ref = createComponentRef(__filename);
export default transferRequest;
