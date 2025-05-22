import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Category',
  type: 'object',
  readOnly: true,
  nullable: true,
  properties: {
    id: {
      title: 'Category ID',
      description: 'Category identifier.',
      type: 'integer',
      readOnly: true,
    },
    name: {
      title: 'Category Name',
      description: 'Name of the category.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
