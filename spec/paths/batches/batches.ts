import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as batchRef } from '../../components/schemas/batches/batch';

const post: OperationObject = {
  description: 'Create batch',
  tags: ['Batches'],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            batch: {
              $ref: batchRef,
            },
            contacts: {
              type: 'string',
              title: 'CSV File',
              description: 'CSV file with recipients and variable values ​​when necessary.',
              format: 'binary',
            },
          },
          required: [
            'batch',
          ],
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
