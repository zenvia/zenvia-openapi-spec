import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const cursor: ParameterObject = {
  name: 'cursor',
  in: 'query',
  required: false,
  description: 'Opaque pagination cursor, as returned in the x-next-cursor response header of a previous call.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default cursor;
