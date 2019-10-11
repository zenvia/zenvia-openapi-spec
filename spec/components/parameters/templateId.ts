import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const templateId: ParameterObject = {
  name: 'templateId',
  in: 'path',
  required: true,
  description: 'the template identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default templateId;
