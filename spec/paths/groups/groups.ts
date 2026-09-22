import { PathItemObject, OperationObject, SchemaObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as groupSchemaRef } from '../../components/schemas/groups/group';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: "List the organization's enabled groups.",
  tags: ['Groups'],
  responses: {
    200: {
      description: 'Groups available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: groupSchemaRef,
            },
          } as SchemaObject,
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of groups.',
            type: 'string',
            example: '5',
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
