import { PathItemObject, OperationObject, ResponsesObject, ResponseObject, SchemaObject } from 'openapi3-ts';
import { ref as flowReportEntryRef } from '../../components/schemas/reports/flow/entries/base';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as sessionId } from '../../components/parameters/reports/flow/sessionId';
import { ref as dispatchId } from '../../components/parameters/reports/flow/dispatchId';
import { ref as flowId } from '../../components/parameters/reports/flow/flowId';
import { ref as startDate } from '../../components/parameters/reports/flow/startDate';
import { ref as endDate } from '../../components/parameters/reports/flow/endDate';

const getOperation: OperationObject = {
  description: 'Retrieve all entries applying the given filters',
  tags: ['Flow Report'],
  responses: {
    200: {
      description: 'Flow report entries',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: flowReportEntryRef,
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
  get: getOperation,
  parameters: [
    {
      $ref: startDate,
    },
    {
      $ref: endDate,
    },
    {
      $ref: flowId,
    },
    {
      $ref: dispatchId,
    },
    {
      $ref: sessionId,
    },
  ],
};

export default path;
