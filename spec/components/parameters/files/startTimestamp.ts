import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const startTimestamp: ParameterObject = {
  name: 'startTimestamp',
  in: 'query',
  required: false,
  description: 'Timestamp after which, the files to be returned, were created',
  schema: {
    type: 'string',
  },
  example: '2022-02-21T10:30:25Z',
};

export const ref = createComponentRef(__filename);
export default startTimestamp;
