import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as multipartBatchRef } from '../../components/schemas/batches/multipart-batch';

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
            contacts: {
              type: 'string',
              title: 'CSV File',
              description: 'CSV file with recipients and variable values ​​when necessary.',
              format: 'binary',
            },
            batch: {
              $ref: multipartBatchRef,
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
            $ref: multipartBatchRef,
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