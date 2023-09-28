import { PathItemObject, OperationObject, ResponseObject, SchemaObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as statusGroupsRef } from '../../components/schemas/status-groups/status-groups';

const get: OperationObject = {
  summary: 'Check groups status',
  description: 'Allows monitoring of the status of Zenvia platforms and solutions.',
  tags: ['Status Groups'],
  responses: {
    200: {
      description: 'Status Groups successfully executed',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: statusGroupsRef,
            },
          } as SchemaObject,
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
};

export default path;
