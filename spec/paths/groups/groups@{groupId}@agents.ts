import { PathItemObject, OperationObject, SchemaObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as agentSchemaRef } from '../../components/schemas/groups/agent';
import { ref as groupId } from '../../components/parameters/groups/groupId';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'List the agents belonging to a group, with their current availability.',
  tags: ['Groups'],
  responses: {
    200: {
      description: 'Agents available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: agentSchemaRef,
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
  get,
  parameters: [{
    $ref: groupId,
  }],
};

export default path;
