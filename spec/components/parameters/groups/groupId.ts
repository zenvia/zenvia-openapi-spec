import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const groupId: ParameterObject = {
  name: 'groupId',
  in: 'path',
  required: true,
  description: 'The group identifier.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default groupId;
