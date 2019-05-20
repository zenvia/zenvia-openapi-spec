import { PathItemObject, OperationObject } from "openapi3-ts";

const post: OperationObject = {
  description: 'Create a new callback subscription',
  tags: ['Subscriptions'],
  responses: {
    200: {
    }
  }
};

const path: PathItemObject = {
  post,
};

export default path;
