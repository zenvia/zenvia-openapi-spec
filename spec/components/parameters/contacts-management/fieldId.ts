import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const fieldId: ParameterObject = {
  name: 'fieldId',
  in: 'path',
  required: true,
  description: 'The data field identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default fieldId;
