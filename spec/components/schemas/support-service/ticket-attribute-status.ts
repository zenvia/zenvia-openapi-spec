import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as justificationRef } from './context/justification';
import { ref as statusRef } from './context/status';

const base: SchemaObject = {
  title: 'Ticket status',
  description: 'Ticket status.',
  type: 'object',
  properties: {
    status: {
      $ref: statusRef,
    },
    justification: {
      $ref: justificationRef,
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
