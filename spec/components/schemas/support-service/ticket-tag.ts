import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTagRef } from './context/tag';

const base: SchemaObject = {
  title: 'Ticket Tags',
  description: 'Ticket tags.',
  type: 'object',
  properties: {
    tag: {
      $ref: ticketTagRef,
    },
    updatedById: {
      title: 'Updated By ID',
      description: 'Updated by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      nullable: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
