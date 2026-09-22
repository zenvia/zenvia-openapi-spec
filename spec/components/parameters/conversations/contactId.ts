import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const contactId: ParameterObject = {
  name: 'contactId',
  in: 'query',
  required: false,
  description: 'Filter by the linked contact identifier.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default contactId;
