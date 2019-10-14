import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const dispatchId: ParameterObject = {
  name: 'dispatchId',
  in: 'query',
  required: false,
  description: 'The identifier of the dispatch for filtering.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default dispatchId;