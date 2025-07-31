import {
  OperationObject,
  PathItemObject,
  ResponseObject,
  ResponsesObject,
  SchemaObject,
} from 'openapi3-ts';
import { ref as batchCreateResponseRef } from '../../components/schemas/partners-batches/batch-create-response';
import { ref as batchListResponseRef } from '../../components/schemas/partners-batches/batch-list-response';
import { ref as errorResponseRef } from '../../components/responses/error';

const post: OperationObject = {
  summary: 'Import a batch of invoices',
  description: 'Import a batch of invoices to be processed.',
  tags: ['Invoice Batches'],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
              description: 'CSV file to be imported.',
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Batch imported successfully.',
      content: {
        'application/json': {
          type: 'object',
          schema: {
            $ref: batchCreateResponseRef,
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const get: OperationObject = {
  summary: 'List all batches of invoices',
  description: 'List all created batches of invoices.',
  tags: ['Invoice Batches'],
  responses: {
    200: {
      description: 'Batches listed successfully.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: batchListResponseRef,
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
  post,
  get,
};

export default path;
