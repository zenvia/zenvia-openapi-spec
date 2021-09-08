import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as botsTransactionStatusPaginatedRef } from '../../components/schemas/bots/transaction/status/paginated';
import { ref as flowIdRef } from '../../components/parameters/flowId';
import { ref as paginatedPageRef } from '../../components/parameters/paginated/page';
import { ref as paginatedSizeRef } from '../../components/parameters/paginated/size';

const get: OperationObject = {
  description: 'Get list of dispatch a bot',
  tags: ['Bots'],
  responses: {
    200: {
      description: 'Transactions found',
      content: {
        'application/json': {
          schema: {
            $ref: botsTransactionStatusPaginatedRef,
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
    $ref: flowIdRef,
  }, {
    $ref: paginatedPageRef,
  }, {
    $ref: paginatedSizeRef,
  }],
};

export default path;
