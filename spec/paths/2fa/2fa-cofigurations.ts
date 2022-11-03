import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenConfigRef } from '../../components/schemas/two-fa/configuration/requests/all';
import { ref as tokenConfigResponseRef } from '../../components/schemas/two-fa/configuration/responses/config-token-created';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  description: 'Create a configuration',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: tokenConfigRef,
        },
      },
    },
  },
  responses:{
    201: {
      description: 'Returns the created configuration',
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigResponseRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const get: OperationObject = {
  description: 'List all configurations',
  tags: ['Two Factor Authentication'],
  responses:{
    200: {
      description: 'Return all tokens configurations',
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigResponseRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
