import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as templateSchemaRef } from '../../components/schemas/templates/base';
import { ref as templateIdRef } from '../../components/parameters/templateId';
import { ref as errorResponseRef } from '../../components/responses/error';

const getOperation: OperationObject = {
  description: 'Retrieve one template by id',
  tags: ['Templates'],
  responses: {
    200: {
      description: 'Template Object',
      content: {
        'application/json': {
          schema: {
            $ref: templateSchemaRef,
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
  get: getOperation,
  parameters: [{
    $ref: templateIdRef,
  }],
};

export default path;
