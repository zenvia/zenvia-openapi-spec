import { ResponseObject } from 'openapi3-ts';
import { ref as errorRef } from '../schemas/error/base';
import { createComponentRef } from '../../../utils/ref';

const response: ResponseObject = {
// tslint:disable-next-line: max-line-length
  description: 'Error response. See the [Error Handling](#section/API-Design/Error-Handling) section for details.',
  content: {
    'application/json': {
      schema: {
        $ref: errorRef,
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default response;
