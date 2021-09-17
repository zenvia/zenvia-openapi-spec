// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Batch Base Object',
  description: 'This is a Batch Base Object model.',
  type: 'object',
  properties: {
    scheduleStart: {
      type: 'string',
      description: 'Start date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:30:00-03:00',
    },
    scheduleEnd: {
      type: 'string',
      description: 'End date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:45:00-03:00',
    },
    scheduleLimit: {
      type: 'string',
      description: 'Limit date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:59:00-03:00',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
