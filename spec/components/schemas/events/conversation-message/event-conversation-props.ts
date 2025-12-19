import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Conversation Object',
  description: 'This is a Message object model',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      type: 'string',
      description: 'Unique identifier for the conversation',
    },
    contactId: {
      title: 'contactId',
      type: 'string',
      description: 'Identifier of the contact associated with the conversation',
    },
  },
    required: ['id', 'contactId'],

};

export const ref = createComponentRef(__filename);
export default base;
