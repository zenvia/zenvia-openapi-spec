import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const meli: ParameterObject = {
  name: 'channels.meli',
  in: 'query',
  required: false,
  description: 'The Mercado Livre ID to filter contact',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default meli;