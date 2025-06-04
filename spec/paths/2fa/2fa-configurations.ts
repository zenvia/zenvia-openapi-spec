import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenConfigRef } from '../../components/schemas/2fa/configuration/requests/all';
import { ref as tokenConfigResponseRef } from '../../components/schemas/2fa/configuration/responses/base';
import { ref as tokenConfigCreatedRef } from '../../components/schemas/2fa/configuration/responses/token-created';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as pageRef } from '../../components/parameters/page-legacy';
import { ref as limitRef } from '../../components/parameters/limit';

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
      headers: {
        Location: {
          description: 'Resource created: https://api.zenvia.com/v2/2fa-configurations/{configurationId}',
          schema: {
            type: 'string',
          },
        },
      },
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigCreatedRef,
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
  parameters: [{
    $ref: pageRef,
  },
  {
    $ref: limitRef,
  }],
  responses:{
    200: {
      description: 'Return all token configurations.',
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
