import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Urgency',
  type: 'object',
  readOnly: true,
  nullable: true,
  properties: {
    id: {
      title: 'Urgency ID',
      description: 'Urgency identifier.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Urgency Name',
      description: 'Name of the urgency.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
