import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const fileId: ParameterObject = {
  name: 'fileId',
  in: 'path',
  required: true,
  description: 'The file identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default fileId;
