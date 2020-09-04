import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as multipartBatchRef } from '../../components/schemas/batches/multipart-batch';
// import { ref as jsonBatchRef } from '../../components/schemas/batches/json-batch';

const post: OperationObject = {
  description: 'Create batch',
  tags: ['Batches'],
  requestBody: {
    required: true,
    content: {
      /*
      'application/json': {
        schema: {
          $ref: jsonBatchRef,
        },
      },
      */
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            batch: {
              $ref: multipartBatchRef,
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
