import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Service',
  type: 'object',
  readOnly: true,
  nullable: true,
  properties: {
    id: {
      title: 'Service ID',
      description: 'Service identifier.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Service Name',
      description: 'Name of the service.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
