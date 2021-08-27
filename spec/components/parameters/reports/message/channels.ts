import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const channels: ParameterObject = {
  name: 'channels',
  in: 'query',
  required: false,
  description: 'A comma-separated list of the channels identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default channels;
