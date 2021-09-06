import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const fileId: ParameterObject = {
  name: 'fileId',
  in: 'path',
  required: true,
  description: 'the file identifier',
  schema: {
    type: 'string',
  },
  example: '61362b0a86fa963778d92aa5',
};

export const ref = createComponentRef(__filename);
export default fileId;
