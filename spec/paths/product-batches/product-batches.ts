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
import { ref as size } from '../../components/parameters/size';
import { ref as page } from '../../components/parameters/page';

const post: OperationObject = {
  summary: 'Import a batch of products',
  description: 'Import a batch of products to be processed.',
  tags: ['Product Batches'],
  security: [{
    TOKEN: [],
  }],
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
              minLength: 8,
            },
          },
          required: [
            'file',
          ],
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Batch imported successfully.',
      headers: {
        Location: {
          description: 'The URL where the newly created batch can be found.',
          schema: {
            type: 'string',
          },
        },
      },
      content: {
        'application/json': {
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
  summary: 'List all batches of products',
  description: 'List all created batches of products.',
  tags: ['Product Batches'],
  parameters: [
    { $ref: size },
    { $ref: page },
  ],
  security: [{
    TOKEN: [],
  }],
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
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of results available.',
            type: 'string',
            example: '100',
          },
        },
        'x-page-size': {
          schema: {
            description: 'The number of results per page.',
            type: 'string',
            example: '10',
          },
        },
        'x-page': {
          schema: {
            description: 'The current page.',
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
  post,
  get,
};

export default path;