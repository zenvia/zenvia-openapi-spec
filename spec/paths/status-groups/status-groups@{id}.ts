import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as statusGroupsRef } from '../../components/schemas/status-groups/status-groups';

const get: OperationObject = {
  summary: 'Check groups status by id',
  description: 'Allows monitoring of the status of a single Zenvia platform and solution.',
  tags: ['Status Groups'],
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
  get
};

export default path;
