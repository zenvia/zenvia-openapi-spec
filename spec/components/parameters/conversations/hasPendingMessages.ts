import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const hasPendingMessages: ParameterObject = {
  name: 'hasPendingMessages',
  in: 'query',
  required: false,
  description: 'Filter by whether the conversation has unread inbound messages.',
  schema: {
    type: 'boolean',
  },
};

export const ref = createComponentRef(__filename);
export default hasPendingMessages;
