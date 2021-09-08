import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as transactionIdRef } from '../../components/parameters/transactionId';

const post: OperationObject = {
  description: 'Pause a bot transaction',
  tags: ['Bots'],
  responses: {
    204: {
      description: 'Transaction paused',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  parameters: [{
    $ref: transactionIdRef,
  }],
};

export default path;
