import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketActionDataFieldRef } from '../../components/schemas/support-service/ticket-action';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/support-service/size';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';

const get: OperationObject = {
  summary: 'List ticket actions',
  description: 'Lists all ticket actions available.',
  tags: ['Ticket Actions'],
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
      description: 'Ticket actions available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: ticketActionDataFieldRef,
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

const post: OperationObject = {
  summary: 'Create ticket action',
  description: 'Allows creation of ticket actions.',
  tags: ['Ticket Actions'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketActionDataFieldRef,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Ticket action created',
      headers: {
        Location: {
          description: 'The URL where the newly created ticket action can be found.',
          schema: {
            type: 'string',
          },
        },
      },
      content: {
        'application/json': {
          schema: {
            $ref: ticketActionDataFieldRef,
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
  parameters: [{
    $ref: ticketIdRef,
  }],
};

export default path;
