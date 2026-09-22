import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sendNoteRequest: SchemaObject = {
  title: 'Send note request',
  description: 'Adds an internal note to the conversation. A note is never delivered to the contact and does not require an active messaging session.',
  type: 'object',
  properties: {
    text: {
      title: 'Text',
      description: 'The note text. Must not be empty.',
      type: 'string',
    },
  },
  required: [
    'text',
  ],
};

export const ref = createComponentRef(__filename);
export default sendNoteRequest;
