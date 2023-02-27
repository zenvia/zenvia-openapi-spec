import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const tokenConfigUpdated: SchemaObject = {
  title: 'Token Configuration update',
  type: 'object',
  description: 'Patch token configuration response',
  properties: {
    message: {
      title: 'Patch token configuration',
      type: 'string',
      example: 'Configuration updated',
    },
  },
};

export const ref = createComponentRef(__filename);
export default tokenConfigUpdated;