import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sort: ParameterObject = {
  name: 'sort',
  in: 'query',
  required: false,
  description: 'The field to sort by, with an optional leading "-" for descending order (e.g. sort=-createdAt). Only a single field is supported.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sort;
