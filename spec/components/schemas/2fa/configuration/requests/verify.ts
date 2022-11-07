import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const verify: SchemaObject = {
  title: 'Verification properties',
  type: 'object',
  description: 'Verification properties',
  properties: {
    maxAttempts: {
      type: 'number',
      description: 'Possible number of attempts for user to verify a token',
      default: 3,
      minimum: 3,
    },
    expireMinutes: {
      type: 'number',
      description: 'Time to expire token in minutes',
      default: 1,
      minimum: 1,
      maximum: 10,
    },
  },
};

export const ref = createComponentRef(__filename);
export default verify;
