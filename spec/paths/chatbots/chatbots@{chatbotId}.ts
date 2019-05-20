import { PathItemObject, OperationObject } from "openapi3-ts";

const get: OperationObject = {
  description: 'Get specific chatbot',
  tags: ['Chatbots'],
  responses: {
    200: {
    }
  }
};

const path: PathItemObject = {
  get,
};

export default path;
