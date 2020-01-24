import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const sessionId: ParameterObject = {
  name: 'sessionId',
  in: 'query',
  required: false,
  description: 'This is the ID between the flow and the client.',
  schema: {
    title: 'Session ID',
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sessionId;
