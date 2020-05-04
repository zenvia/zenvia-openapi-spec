import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const channel: ParameterObject = {
  name: 'channel',
  in: 'query',
  required: false,
  description: 'Filter by channel',
  schema: {
    type: 'string',
    enum: [
      'WHATSAPP',
    ],
  },
  example: 'WHATSAPP',
};

export const ref = createComponentRef(__filename);
export default channel;
