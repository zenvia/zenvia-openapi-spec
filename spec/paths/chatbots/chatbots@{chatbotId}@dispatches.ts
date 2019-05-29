import { PathItemObject, OperationObject } from 'openapi3-ts';
import { ref as chatbotId } from '../../components/parameters/chatbotId';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a bulk or single dispatch',
  tags: ['Dispatches'],
  responses: {
    200: {
      description: 'Created chatbot dispatch',
    },
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  parameters: [{
    $ref: chatbotId,
  }],
  post,
};

export default path;
