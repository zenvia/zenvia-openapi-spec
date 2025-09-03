import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as serviceRef } from './context/service';

const base: SchemaObject = {
  title: 'Ticket service',
  description: 'Ticket service.',
  type: 'object',
  properties: {
    service: {
      $ref: serviceRef,
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
