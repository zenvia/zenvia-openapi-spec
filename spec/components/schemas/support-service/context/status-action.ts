import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as systemStatusTypeRef } from './system-status-type';

const base: SchemaObject = {
  title: 'Status',
  description: 'The ticket status. If no status is provided, the action defaults to the ticket\'s most recent status.',
  type: 'object',
  nullable: true,
  properties: {
    id: {
      title: 'Status ID',
      description: 'Status identifier.',
      type: 'integer',
    },
    name: {
      title: 'Status Name',
      description: 'Name of the status.',
      type: 'string',
      readOnly: true,
    },
    type: {
      $ref: systemStatusTypeRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
