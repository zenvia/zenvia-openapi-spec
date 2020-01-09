import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const type: ParameterObject = {
  name: 'type',
  in: 'query',
  required: false,
  description: 'the type of message',
  schema: {
    type: 'string',
    enum: [
      'message',
      'notification',
    ],
  },
};

export const ref = createComponentRef(__filename);
export default type;
