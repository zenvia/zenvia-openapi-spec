import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as postBackRef } from './buttons/postback';

export const quickreply: SchemaObject = {
  title: 'QuickReply',
  description: 'QuickReply',
  type: 'object',
  oneOf: [{
    $ref: postBackRef,
  }
  ],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      postback: postBackRef
    },
  },
};

export const ref = createComponentRef(__filename);
export default quickreply;
