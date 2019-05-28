import { PathItemObject, OperationObject } from 'openapi3-ts';

const post: OperationObject = {
  description: 'Send a SMS message',
  tags: ['SMS'],
  responses: {
    200: {
      description: 'Message created',
    },
  },
};

const path: PathItemObject = {
  post,
};

export default path;
