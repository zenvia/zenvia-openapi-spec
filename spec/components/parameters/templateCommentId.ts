import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const templateCommentId: ParameterObject = {
  name: 'templateCommentId',
  in: 'path',
  required: true,
  description: 'The comment identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default templateCommentId;
