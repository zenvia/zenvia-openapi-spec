import { PathItemObject, OperationObject } from "openapi3-ts";

const get: OperationObject = {
  description: 'List all chatbots',
  tags: ['Chatbots'],
  responses: {
    200: {
    }
  }
};

const post: OperationObject = {
  description: 'Create a new chatbot',
  tags: ['Chatbots'],
  responses: {
    200: {
    }
  }
};

const path: PathItemObject = {
  get,
  post,
};

export default path;
