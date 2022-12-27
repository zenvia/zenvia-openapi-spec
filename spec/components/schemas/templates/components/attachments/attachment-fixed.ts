import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const disposition: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Type desc',
      type: 'string',
    },
    fileUrl: {
      title: 'Content ID',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default disposition;
