import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as ticketTypeRef } from './context/ticket-type';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status-action';
import { ref as originRef } from './context/origin-type';

const base: SchemaObject = {
  title: 'Ticket Actions',
  description: 'Ticket actions information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket action.',
      type: 'integer',
      readOnly: true,
    },
    type: {
      $ref: ticketTypeRef,
    },
    origin: {
      $ref: originRef,
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    status: {
      $ref: statusRef,
    },
    justification: {
      $ref: justificationRef,
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
