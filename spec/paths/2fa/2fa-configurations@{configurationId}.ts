import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenConfigRef } from '../../components/schemas/2fa/configuration/requests/all';
import { ref as configurationIdRef } from '../../components/parameters/configurationId';
import { ref as tokenConfigCreatedRef } from '../../components/schemas/2fa/configuration/responses/token-created';
import { ref as patchConfigRef } from '../../components/schemas/2fa/configuration/requests/patch-config';

const del: OperationObject = {
  description: 'Delete a configuration by configuration id',
  tags: ['Two Factor Authentication'],
  responses: {
    204: {
      description: 'No content',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const get: OperationObject = {
  description: 'List a configuration by id',
  tags: ['Two Factor Authentication'],
  responses: {
    200: {
      description: 'Return the specific configuration by id',
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const patch: OperationObject = {
  description: 'Patch configuration',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: patchConfigRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns success',
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

const path: PathItemObject = {
  get,
  delete: del,
  patch,
  parameters: [{
    $ref: configurationIdRef,
  }],
};

export default path;
