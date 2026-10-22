import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const sort: ParameterObject = {
  name: 'sort',
  in: 'query',
  required: false,
  description: 'The field to sort by, optionally followed by ",asc" or ",desc" (lowercase only, e.g. sort=createdAt,desc). If omitted entirely, defaults to createdAt,desc; if a field is given with no direction, defaults to ascending. Only a single field is supported.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sort;
