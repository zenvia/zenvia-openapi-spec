import { PathItemObject, OperationObject, ResponsesObject, ResponseObject, SchemaObject } from 'openapi3-ts';
import { ref as messageReportEntryRef } from '../../components/schemas/reports/message/entry/base';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as startDate } from '../../components/parameters/reports/message/startDate';
import { ref as endDate } from '../../components/parameters/reports/message/endDate';
import { ref as channelsRef } from '../../components/parameters/reports/message/channels';
import { ref as type } from '../../components/parameters/reports/message/type';

const getOperation: OperationObject = {
  description: 'Retrieve all entries applying the given filters',
  tags: ['Message Report'],
  responses: {
    200: {
      description: 'Message report entries',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: messageReportEntryRef,
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
      $ref: channelsRef,
    },
    {
      $ref: type,
    },
  ],
};

export default path;
