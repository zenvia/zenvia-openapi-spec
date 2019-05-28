import { PathItemObject, OperationObject } from 'openapi3-ts';
import { ref as chatbotId } from '../../components/parameters/chatbotId';

const get: OperationObject = {
  description: 'Get specific chatbot',
  tags: ['Chatbots'],
  responses: {
    200: {
      description: 'Return chatbot by id',
    },
  },
};

const path: PathItemObject = {
  parameters: [{
    $ref: chatbotId,
  }],
  get,
};

export default path;
