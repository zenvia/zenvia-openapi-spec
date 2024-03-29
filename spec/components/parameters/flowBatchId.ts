import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const flowBatchId: ParameterObject = {
  name: 'flowBatchId',
  in: 'path',
  required: true,
  description: 'Flow Batch identifier',
  schema: {
    type: 'string',
  },
  example: 'b5agf1-y237-11e8-b127-1230f6c2d98m',
};

export const ref = createComponentRef(__filename);
export default flowBatchId;
