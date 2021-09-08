import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as transactionIdRef } from '../../components/parameters/transactionId';

const get: OperationObject = {
  description: 'Get itens of dispatch a bot',
  tags: ['Bots'],
  responses: {
    200: {
      description: 'Items found',
      content: {
        'text/cvs': {},
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
