import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as webhookSchemaRef } from './webhook';
import { ref as statusRef } from './status';

const partialSubscription: SchemaObject = {
  type: 'object',
  properties: {
    webhook: {
      $ref: webhookSchemaRef,
    },
    status: {
      $ref: statusRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default partialSubscription;
