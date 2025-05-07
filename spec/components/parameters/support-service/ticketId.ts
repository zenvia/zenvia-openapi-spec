import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const ticketId: ParameterObject = {
  name: 'ticketId',
  in: 'path',
  required: true,
  description: 'The ticket identifier.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default ticketId;
