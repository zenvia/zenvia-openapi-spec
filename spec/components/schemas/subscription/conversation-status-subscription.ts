import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [
    {
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
    },
  ],
};

export const ref = createComponentRef(__filename);
export default subscription;
