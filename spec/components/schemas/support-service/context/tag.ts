import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Tag',
  type: 'object',
  properties: {
    id: {
      title: 'Tag ID',
      description: 'Tag identifier.',
      type: 'integer',
    },
    name: {
      title: 'Tag Name',
      description: 'Name of the tag.',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
