import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket clients',
  description: 'Ticket clients.',
  type: 'object',
  properties: {
    clients: {
      title: 'Clients',
      description: 'List of client identifiers of the ticket.',
      type: 'array',
      nullable: false,
      items: {
        type: 'string',
      },
      example: ['a4a4bc53-8396-4190-92e3-7edb6826e3dc'],
    },
    updatedById: {
      title: 'Updated by identification',
      description: 'User that made the changes.',
      type: 'string',
      nullable: true,
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
