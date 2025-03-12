import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as originRef } from './context/origin';

const base: SchemaObject = {
  title: 'Ticket Actions',
  description: 'Ticket actions information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket action.',
      type: 'string',
      readOnly: true,
    },
    type: {
      $ref: ticketTypeRef,
    },
    justification: {
      title: 'Justification',
      type: 'string',
    },
    status: {
      title: 'Status',
      type: 'string',
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    origin: {
      $ref: originRef,
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the ticket creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    createdBy: {
      title: 'Created By',
      description: 'Created by identifier',
      type: 'string',
      example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
