import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as templateIdRef } from '../../components/parameters/templateId';
import { ref as templateCommentSchemaRef } from '../../components/schemas/templates/template-comment';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a new comment',
  tags: ['Templates'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: templateCommentSchemaRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created comment',
      content: {
        'application/json': {
          schema: {
            $ref: templateCommentSchemaRef,
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const get: OperationObject = {
  description: 'List all comments',
  tags: ['Templates'],
  responses: {
    200: {
      description: 'Comment Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: templateCommentSchemaRef,
            },
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  get,
  parameters: [{
    $ref: templateIdRef,
  }],
};

export default path;
