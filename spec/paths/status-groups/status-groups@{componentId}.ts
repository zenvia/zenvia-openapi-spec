import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as statusGroupsRef } from '../../components/schemas/status-groups/status-groups';
import { ref as statusGroupsIdRef } from '../../components/parameters/statusGroupsId';

const get: OperationObject = {
  summary: 'Check groups status by id',
  description: 'Allows monitoring of the status of a single Zenvia platform and solution.',
  tags: ['Status Groups'],
  security: [],
  parameters: [{
    $ref: statusGroupsIdRef,
  }],
  responses: {
    200: {
      description: 'Status Groups object',
      content: {
        'application/json': {
          schema: {
            $ref: statusGroupsRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
};

export default path;
