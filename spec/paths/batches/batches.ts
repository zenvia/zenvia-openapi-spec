import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as batchRef } from '../../components/schemas/batches/base';

const post: OperationObject = {
  description: 'Create batch',
  tags: ['Batches'],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          properties: {
            file: {
              type: 'string',
              title: 'CSV File',
              description: 'CSV file with recipients and variable values ​​when necessary.',
              format: 'binary'
            },
            batch: { //TODO batch
              $ref: batchRef
            }
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created batch',
      content: {
        'application/json': {
          schema: {
            $ref: batchRef,
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
  post,
};

export default path;
