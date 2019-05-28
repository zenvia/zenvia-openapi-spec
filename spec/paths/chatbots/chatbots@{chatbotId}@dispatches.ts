import { PathItemObject, OperationObject } from "openapi3-ts";
import { ref as chatbotId } from '../../components/parameters/chatbotId';

const post: OperationObject = {
  description: 'Create a bulk or single dispatch',
  tags: ['Dispatches'],
  responses: {
    200: {
      description: 'Created chatbot dispatch',
    }
  }
};

const path: PathItemObject = {
  parameters: [{
    $ref: chatbotId
  }],
  post,
};

export default path;
