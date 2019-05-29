import { PathItemObject, OperationObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'List all chatbots',
  tags: ['Chatbots'],
  responses: {
    200: {
      description: 'Return chatbot list',
    },
    default: {
      $ref: errorResponseRef,
    },
  },
};

const post: OperationObject = {
  description: 'Create a new chatbot',
  tags: ['Chatbots'],
  responses: {
    200: {
      description: 'Chatbot created',
    },
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  get,
  post,
};

export default path;
