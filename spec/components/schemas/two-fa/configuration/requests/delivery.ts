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
      description: 'Max attempts to deliver a token',
      default: 1,
      minimum: 1,
      maximum: 5,
    },
    minIntervalSeconds: {
      title: 'Min Interval In Seconds',
      type: 'number',
      description: 'Interval in seconds to deliver a token',
      default: 60,
      minimum: 60,
      maximum: 120,
    },
  },
};

export const ref = createComponentRef(__filename);
export default delivery;
