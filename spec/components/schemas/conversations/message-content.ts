import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const messageContent: SchemaObject = {
  title: 'Message content',
  description: 'A message content item.',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      type: 'string',
      enum: ['text', 'template', 'file', 'location', 'note'],
    },
    payload: {
      title: 'Payload',
      description: 'The content payload, shaped according to type.',
      type: 'object',
    },
  },
  required: ['type'],
};

export const ref = createComponentRef(__filename);
export default messageContent;
