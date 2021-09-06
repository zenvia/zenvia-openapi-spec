import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const flowId: ParameterObject = {
  name: 'flowId',
  in: 'path',
  required: true,
  description: 'the flow identifier',
  schema: {
    type: 'string',
  },
  example: 'b5agf1-y237-11e8-b127-1230f6c2d98m',
};

export const ref = createComponentRef(__filename);
export default flowId;
