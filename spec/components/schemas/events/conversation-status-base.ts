import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const conversationBase: SchemaObject = {
  type: 'object',
  description: 'Base structure for all conversation objects',
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
  required: ['id', 'status', 'statusTimestamp'],
};

export const ref = createComponentRef(__filename);
export default conversationBase;
