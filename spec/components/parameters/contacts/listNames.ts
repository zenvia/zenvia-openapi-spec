import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const contactId: ParameterObject = {
  name: 'listNames',
  in: 'query',
  required: false,
  description: 'Contact list names to filter the contacts.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
  example: ['List 1', 'List 2', 'List 3'],
};

export const ref = createComponentRef(__filename);
export default contactId;
