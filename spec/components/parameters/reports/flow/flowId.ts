import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const flowId: ParameterObject = {
  name: 'flowId',
  in: 'query',
  required: false,
  description: 'The the flow identifier. You can view your <a href="https://app.zenvia.com/home/chatbot" target="_blank"> Flow IDs here.</a>',
  schema: {
    title: 'Flow ID',
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default flowId;
