import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const automationId: ParameterObject = {
  name: 'automationId',
  in: 'path',
  required: true,
  description: 'The automation identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default automationId;
