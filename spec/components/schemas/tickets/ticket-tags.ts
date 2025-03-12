import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Ticket tags',
  description: 'Ticket tags information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the ticket tag.',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Tag name',
      description: 'Name of the tag',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
