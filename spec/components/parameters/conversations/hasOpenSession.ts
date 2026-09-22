import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const hasOpenSession: ParameterObject = {
  name: 'hasOpenSession',
  in: 'query',
  required: false,
  description: 'Filter by whether the conversation currently has an active messaging session with the contact.',
  schema: {
    type: 'boolean',
  },
};

export const ref = createComponentRef(__filename);
export default hasOpenSession;
