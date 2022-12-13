import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const status: ParameterObject = {
  name: 'status',
  in: 'query',
  description: 'Filter by status',
  required: false,
  schema: {
    type: 'string',
    enum: [
      'WAITING_REVIEW',
      'REJECTED',
      'WAITING_APPROVAL',
      'APPROVED',
      'PAUSED',
      'DISABLED',
    ],
  },
  example: 'APPROVED',
};

export const ref = createComponentRef(__filename);
export default status;
