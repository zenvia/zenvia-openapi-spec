import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const productId: ParameterObject = {
  name: 'productId',
  in: 'query',
  required: false,
  description: 'The identifier of the product for filtering.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default productId;