import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as botsTransactionFullRef } from '../../components/schemas/bots/transaction/full';
import { ref as transactionIdRef } from '../../components/parameters/transactionId';

const get: OperationObject = {
  description: 'Get information about dispatch a bot',
  tags: ['Bots'],
  responses: {
    200: {
      description: 'Transaction found',
      content: {
        'application/json': {
          schema: {
            $ref: botsTransactionFullRef,
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
  parameters: [{
    $ref: transactionIdRef,
  }],
};

export default path;
