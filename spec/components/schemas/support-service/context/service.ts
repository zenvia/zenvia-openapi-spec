import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Service',
  type: 'object',
  nullable: true,
  properties: {
    id: {
      title: 'Service ID',
      description: 'Service identifier.',
      type: 'integer',
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
