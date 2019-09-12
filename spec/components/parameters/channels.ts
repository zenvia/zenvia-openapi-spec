import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const channels: ParameterObject = {
  name: 'channels',
  in: 'query',
  required: false,
  description: 'The channels available for filtering.',
  schema: {
    type: 'array',
    items: {
      type: 'string',
      enum: ['sms', 'whatsapp', 'facebook', 'chat'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default channels;
