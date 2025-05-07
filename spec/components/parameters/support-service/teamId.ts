import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const teamId: ParameterObject = {
  name: 'teamId',
  in: 'path',
  required: true,
  description: 'The team identifier.',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default teamId;
