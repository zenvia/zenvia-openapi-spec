import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const listId: ParameterObject = {
  name: 'listId',
  in: 'path',
  required: true,
  description: 'The contact list identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default listId;
