// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Message Object',
  description: 'This is a Message object model',
  type: 'object',
  properties: {
    from: {
      title: 'Sender ID',
      description: 'The identifier for the sender of the message. The sender shoud be created with a credential.',
      type: 'string',
    },
    contents: {
      title: 'Message Contents',
      description: 'A list of content to be sent',
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
      },
    },
  },
  required: [
    'from',
    'contents',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
