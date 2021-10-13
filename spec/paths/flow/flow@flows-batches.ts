import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowsWorkflowJsonRef } from '../../components/schemas/flows/workflow/json';
import { ref as flowsWorkflowFileRef } from '../../components/schemas/flows/workflow/file';
import { ref as flowIdRef } from '../../components/parameters/flowId';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';
import { ref as flowsBatchStatusRef } from '../../components/schemas/flows/batch/status';


const get: OperationObject = {
  description: 'Get list of flows-batches',
  tags: ['Flows Batches'],
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
            type: 'array',
            items: {
              $ref: flowsBatchStatusRef
            }
          },
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The number of results',
            type: 'number',
            example: 100
          }
        },
        'x-page-size': {
          schema: {
            description: 'The number of results per page',
            type: 'number',
            example: 10,
          }
        },
        'x-page': {
          schema: {
            description: 'The current page',
            type: 'number',
            example: 5
          }
        }
      }
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const post: OperationObject = {
  description: 'Create a flow batch',
  tags: ['Flows Batches'],
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
              description: 'Binary csv file with recipients and variable values ​​when necessary. \n \
                            \n **Requirements**: \
                            \n * The file must be in **.csv** format; \
                            \n * The maximum file size is **50MB**; ,\
                            \n * The mandatory delimiter to be used between the values ​​is the **semicolon (";")**; \
                            \n * The first line of the file is dedicated to the header. There must be a column that has the recipients phone numbers. If your content has variables, there must be corresponding columns.'
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
            $ref: flowsBatchStatusRef,
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
