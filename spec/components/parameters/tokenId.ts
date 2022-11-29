import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const tokenId: ParameterObject = {
  name: 'tokenId',
  in: 'path',
  required: true,
  description: 'The token identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default tokenId;
