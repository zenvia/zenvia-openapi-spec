import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const senderId: ParameterObject = {
  name: 'senderId',
  in: 'query',
  required: false,
  description: 'Filter by senderId',
  schema: {
    type: 'string',
  },
  example: 'b5agf1-y237-11e8-b127-1230f6c2d98m',
};

export const ref = createComponentRef(__filename);
export default senderId;
