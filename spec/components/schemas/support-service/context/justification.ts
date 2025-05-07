import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Justification',
  type: 'object',
  readOnly: true,
  nullable: true,
  properties: {
    id: {
      title: 'Justification ID',
      description: 'Justification identifier.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Justification Name',
      description: 'Name of the justification.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
