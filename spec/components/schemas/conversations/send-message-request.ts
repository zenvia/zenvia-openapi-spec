import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sendMessageRequest: SchemaObject = {
  title: 'Send message request',
  description: 'Sends an outbound message to the contact, as the acting agent. Fails with SESSION_REQUIRED if there is no active messaging session with the contact.',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'The content type to send.',
      type: 'string',
      enum: ['text', 'template', 'file', 'location'],
      example: 'text',
    },
    payload: {
      title: 'Payload',
      description: 'The content payload, shaped according to type (e.g. { "text": "..." } for type text, { "templateId": "..." } for type template).',
      type: 'object',
    },
    replyTo: {
      title: 'Reply to',
      description: 'Optional identifier of the message being replied to.',
      type: 'string',
    },
  },
  required: [
    'type',
    'payload',
  ],
};

export const ref = createComponentRef(__filename);
export default sendMessageRequest;
