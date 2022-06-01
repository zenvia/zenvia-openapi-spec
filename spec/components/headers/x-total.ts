import { HeadersObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

export const xTotal: HeadersObject = {
  'x-total': {
    schema: {
      description: 'The total number of results available.',
      type: 'string',
      example: '100',
    },
  },
};

export const ref = createComponentRef(__filename);
export default xTotal;
