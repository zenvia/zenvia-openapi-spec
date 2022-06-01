import { HeadersObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

export const xPageAndSize: HeadersObject = {
  'x-page-size': {
    schema: {
      description: 'The number of results per page.',
      type: 'string',
      example: '10',
    },
  },
  'x-page': {
    schema: {
      description: 'The current page.',
      type: 'string',
      example: '5',
    },
  },
};

export const ref = createComponentRef(__filename);
export default xPageAndSize;
