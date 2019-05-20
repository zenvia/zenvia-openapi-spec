import { PathItemObject, OperationObject } from "openapi3-ts";

const post: OperationObject = {
  description: 'Send a Facebook message',
  tags: ['Facebook'],
  responses: {
    200: {
    }
  }
};

const path: PathItemObject = {
  post,
};

export default path;
