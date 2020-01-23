import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const channel: ParameterObject = {
  name: 'channel',
  in: 'query',
  required: false,
  description: 'The channel identifier.',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default channel;
