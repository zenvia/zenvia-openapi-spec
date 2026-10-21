import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sort: ParameterObject = {
  name: 'sort',
  in: 'query',
  required: false,
  description: 'The field to sort by, optionally followed by ",asc" or ",desc" (e.g. sort=createdAt,desc). Defaults to ascending. Only a single field is supported.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sort;
