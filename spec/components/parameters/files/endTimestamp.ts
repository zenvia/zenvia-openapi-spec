import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const endTimestamp: ParameterObject = {
  name: 'endTimestamp',
  in: 'query',
  required: false,
  description: 'Date the file were created',
  schema: {
    type: 'string',
  },
  example: '2022-02-21',
};

export const ref = createComponentRef(__filename);
export default endTimestamp;
