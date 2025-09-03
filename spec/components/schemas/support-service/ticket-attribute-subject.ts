import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket subject',
  description: 'Ticket subject.',
  type: 'object',
  properties: {
    subject: {
      title: 'Subject',
      description: 'Subject of the ticket.',
      type: 'string',
      readOnly: true,
      nullable: false,
    },
    updatedById: {
      title: 'Updated by identification',
      description: 'User that made the changes.',
      type: 'string',
      nullable: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
