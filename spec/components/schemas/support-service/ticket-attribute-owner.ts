import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket owner',
  description: 'Ticket owner.',
  type: 'object',
  properties: {
    ownerId: {
      title: 'Owner Id',
      description: 'Owner identification.',
      type: 'string',
      example: '5404ed19-2994-4831-bb33-627e27b18ab1',
      nullable: false,
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
