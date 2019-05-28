import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../utils/ref';

const chatbotId: ParameterObject = {
  name: 'chatbotId',
  in: 'path',
  required: true,
  description: 'the chatbot identifier',
  schema: {
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default chatbotId;
