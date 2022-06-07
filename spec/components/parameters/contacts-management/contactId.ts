import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const contactId: ParameterObject = {
  name: 'contactId',
  in: 'path',
  required: true,
  description: 'The contact identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default contactId;
