import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const contactId: ParameterObject = {
  name: 'listId',
  in: 'query',
  required: false,
  description: 'Contact list ids to filter the contacts.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
  example: ['list-id-01', 'list-id-02', 'list-id-03'],
};

export const ref = createComponentRef(__filename);
export default contactId;
