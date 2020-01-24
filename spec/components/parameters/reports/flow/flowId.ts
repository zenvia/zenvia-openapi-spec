import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const flowId: ParameterObject = {
  name: 'flowId',
  in: 'query',
  required: false,
  description: 'This is the flow identifier. You can acess your <a href="https://app.zenvia.com/home/chatbot" target="_blank"> Flow ID here.</a>',
  schema: {
    title: 'Flow ID',
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default flowId;
