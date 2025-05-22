import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const updatedAt: ParameterObject = {
  name: 'statusId',
  in: 'query',
  required: false,
  description: 'The status id of the ticket.',
  schema: {
    type: 'integer',
  },
};

export const ref = createComponentRef(__filename);
export default updatedAt;
