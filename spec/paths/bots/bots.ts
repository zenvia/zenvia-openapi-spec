import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as botsWorkflowJsonRef } from '../../components/schemas/bots/workflow/json';
import { ref as botsWorkflowFileRef } from '../../components/schemas/bots/workflow/file';
import { ref as botsTransactionRef } from '../../components/schemas/bots/transaction';

const post: OperationObject = {
  description: 'Dispatch a bot',
  tags: ['Bots'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: botsWorkflowJsonRef,
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
              $ref: botsWorkflowFileRef,
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
    202: {
      description: 'Accepted bot dispatch',
      content: {
        'application/json': {
          schema: {
            $ref: botsTransactionRef,
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
};

export default path;
