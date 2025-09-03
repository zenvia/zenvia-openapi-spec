import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';

const base: SchemaObject = {
  title: 'Ticket type',
  description: 'Ticket type.',
  type: 'object',
  properties: {
    type: {
      $ref: ticketTypeRef,
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
