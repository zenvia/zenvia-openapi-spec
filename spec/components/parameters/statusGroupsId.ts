import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const statusGroupsId: ParameterObject = {
  name: 'componentId',
  in: 'path',
  required: true,
  description: 'The component of the status groups identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default statusGroupsId;
