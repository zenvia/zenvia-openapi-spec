import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowBatchesJsonRef } from '../../components/schemas/flow/batches/json';
import { ref as flowBatchesMultipartRef } from '../../components/schemas/flow/batches/multipart';
import { ref as flowBatchesItemRef } from '../../components/schemas/flow/batches/item';
import { ref as flowIdRef } from '../../components/parameters/flowId';
import { ref as pageRef } from '../../components/parameters/page-legacy';
import { ref as sizeRef } from '../../components/parameters/size';

const get: OperationObject = {
  description: 'Get list of flow-batches',
  tags: ['Flow Batches'],
  parameters: [{
    $ref: flowIdRef,
  }, {
    $ref: pageRef,
  }, {
    $ref: sizeRef,
  }],
  responses: {
    200: {
      description: 'Flow-batches found',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: flowBatchesItemRef,
            },
          },
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

const post: OperationObject = {
  description: 'Create a flow batch',
  tags: ['Flow Batches'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: flowBatchesJsonRef,
        },
      },
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            csv: {
              type: 'string',
              title: 'Binary CSV File',
              description: `Binary csv file with recipients and variable values when necessary.

 **Requirements**:
 * The file must be in **.csv** format;
 * The maximum file size is **50MB**;
 * The mandatory delimiter to be used between the values is the **semicolon (";")**;
 * The first line of the file is dedicated to the header. There must be a column that has the recipients phone numbers. If your content has variables, there must be corresponding columns.`,
            },
            request: {
              $ref: flowBatchesMultipartRef,
            },
          },
          required: [
            'csv',
            'request',
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created flow batch',
      content: {
        'application/json': {
          schema: {
            $ref: flowBatchesItemRef,
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
