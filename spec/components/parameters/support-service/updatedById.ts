import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const updatedById: ParameterObject = {
  name: 'updatedById',
  in: 'query',
  required: false,
  description: 'User that made the changes.',
  schema: {
    type: 'string',
    example: '3525fdd7-34c7-4159-bf7c-b33e4e772c05',
  },
};

export const ref = createComponentRef(__filename);
export default updatedById;
