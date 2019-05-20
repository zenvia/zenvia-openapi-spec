import { PathItemObject, OperationObject } from "openapi3-ts";

const post: OperationObject = {
  description: 'Create a bulk or single dispatch',
  tags: ['Dispatches'],
  responses: {
    200: {
    }
  }
};

const path: PathItemObject = {
  post,
};

export default path;
