import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowsWorkflowJsonRef } from '../../components/schemas/flows/workflow/json';
import { ref as flowsWorkflowFileRef } from '../../components/schemas/flows/workflow/file';
import { ref as flowsTransactionRef } from '../../components/schemas/flows/transaction';
import { ref as flowsBatchPaginatedRef } from '../../components/schemas/flows/batch/paginated';
import { ref as flowIdRef } from '../../components/parameters/flowId';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';

const get: OperationObject = {
  description: 'Get list of flows-batches',
  tags: ['Flows'],
  parameters: [{
    $ref: flowIdRef,
  }, {
    $ref: pageRef,
  }, {
    $ref: sizeRef,
  }],
  responses: {
    200: {
      description: 'Flows-batches found',
      content: {
        'application/json': {
          schema: {
            $ref: flowsBatchPaginatedRef,
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
  tags: ['Flows'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: flowsWorkflowJsonRef,
        },
      },
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            csv: {
              type: 'string',
              title: 'Binary CSV File',
              description: 'Binary csv file with recipients and variable values ​​when necessary.',
            },
            request: {
              $ref: flowsWorkflowFileRef,
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
            $ref: flowsTransactionRef,
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
  get,
  post,
};

export default path;
