import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const delivery: SchemaObject = {
  title: 'Delivery properties',
  type: 'object',
  description: 'Delivery properties',
  properties: {
    maxAttempts: {
      title: 'Max Attempts',
      type: 'number',
      description: 'Max attempts a user can request to receive a token',
      default: 1,
      minimum: 1,
      maximum: 5,
    },
    minIntervalSeconds: {
      title: 'Min Interval In Seconds',
      type: 'number',
      description: 'Minimum interval in seconds that a user is required to wait to be able to request a resend of the token',
      default: 60,
      minimum: 60,
      maximum: 120,
    },
  },
};

export const ref = createComponentRef(__filename);
export default delivery;
