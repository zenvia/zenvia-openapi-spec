import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketDataFieldRef } from '../../components/schemas/tickets/tickets';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/size';

const get: OperationObject = {
  summary: 'List tickets',
  description: 'Lists all tickets available.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  parameters: [{
    $ref: pageRef,
  }, {
    $ref: sizeRef,
  }],
  responses: {
    200: {
      description: 'Tickets available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: ticketDataFieldRef,
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

const path: PathItemObject = {
  get,
};

export default path;
