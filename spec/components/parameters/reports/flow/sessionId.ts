import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const sessionId: ParameterObject = {
  name: 'sessionId',
  in: 'query',
  required: false,
  description: 'This ID represents a flow execution. In case of conversational flows, it identifies the conversation in our platform.',
  schema: {
    title: 'Session ID',
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default sessionId;
