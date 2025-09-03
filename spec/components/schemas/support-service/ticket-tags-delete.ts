import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket Tag removed',
  description: 'Ticket tag removed.',
  type: 'object',
  properties: {
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
