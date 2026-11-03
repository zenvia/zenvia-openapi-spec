import { PathItemObject, OperationObject, SchemaObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as closingReasonSchemaRef } from '../../components/schemas/groups/closing-reason';
import { ref as groupId } from '../../components/parameters/groups/groupId';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'List the closing reasons configured for a group.',
  tags: ['Groups'],
  responses: {
    200: {
      description: 'Closing reasons available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: closingReasonSchemaRef,
            },
          } as SchemaObject,
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of closing reasons.',
            type: 'string',
            example: '2',
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
  parameters: [{
    $ref: groupId,
  }],
};

export default path;
