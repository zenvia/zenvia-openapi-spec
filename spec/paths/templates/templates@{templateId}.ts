import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as templateSchemaRef } from '../../components/schemas/templates/template';
import { ref as partialTemplateSchemaRef } from '../../components/schemas/templates/partial-template';
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

const deleteOperation: OperationObject = {
  description: 'Delete one template by id',
  tags: ['Templates'],
  responses: {
    204: {
      description: 'No content',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const updateOperation: OperationObject = {
  description: 'Update one template by id',
  tags: ['Templates'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: partialTemplateSchemaRef,
        },
      },
    },
  },
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
  delete: deleteOperation,
  patch: updateOperation,
  parameters: [{
    $ref: templateIdRef,
  }],
};

export default path;
