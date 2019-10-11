import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as templateSchemaRef } from '../../components/schemas/templates/base';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'List all templates',
  tags: ['Templates'],
  responses: {
    200: {
      description: 'Template Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: templateSchemaRef,
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
};

export default path;
