import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as ticketTypeRef } from './ticket-type';

const base: SchemaObject = {
  title: 'First Ticket Action',
  type: 'object',
  writeOnly: true,
  properties: {
    type: {
      $ref: ticketTypeRef,
    },
    name: {
      title: 'Category Name',
      description: 'Name of the category.',
      type: 'string',
      readOnly: true,
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the action creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
    },
    createdById: {
      title: 'Created By ID',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      nullable: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
