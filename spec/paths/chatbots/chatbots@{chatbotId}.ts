import { PathItemObject, OperationObject } from 'openapi3-ts';
import { ref as chatbotId } from '../../components/parameters/chatbotId';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'Get specific chatbot',
  tags: ['Chatbots'],
  responses: {
    200: {
      description: 'Return chatbot by id',
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
  get,
};

export default path;
