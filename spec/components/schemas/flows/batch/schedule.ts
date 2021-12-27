// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'Batch schedule',
  description: 'Schedule to the batch dispatch',
  type: 'object',
  properties: {
    start: {
      type: 'string',
      description: 'The schedule start date.',
      example: '2021-08-03T16:26:23.616Z',
    },
    end: {
      type: 'string',
      description: 'The schedule end date.',
      example: '2021-08-03T16:26:23.616Z',
    },
    limit: {
      type: 'string',
      description: 'The schedule limit date.',
      example: '2021-08-03T16:26:23.616Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
