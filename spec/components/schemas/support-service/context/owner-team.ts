import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Owner Team',
  description: 'Owner team if ticket owner is a team.',
  type: 'object',
  readOnly: true,
  nullable: true,
  properties: {
    id: {
      title: 'Owner Team Id',
      description: 'Owner Team identifier.',
      type: 'integer',
    },
    name: {
      title: 'Owner Team Name',
      description: 'Name of the team.',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
