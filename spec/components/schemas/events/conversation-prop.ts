// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Conversation Object',
  description: 'This is a Message object model',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      type: 'string',
    },
    contactId: {
      title: 'contactId',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
