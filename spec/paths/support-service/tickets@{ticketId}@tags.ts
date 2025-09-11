import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketTagsDataFieldRef } from '../../components/schemas/support-service/context/tag';
import { ref as ticketTagsPostDataFieldRef } from '../../components/schemas/support-service/ticket-tag';
import { ref as pageRef } from '../../components/parameters/page';
import { ref as sizeRef } from '../../components/parameters/support-service/size';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';

const get: OperationObject = {
  summary: 'List ticket tags',
  description: 'Lists all ticket tags available.',
  tags: ['Ticket Tags'],
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
      description: 'Ticket tags available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: ticketTagsDataFieldRef,
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
  summary: 'Attach a tag to a ticket',
  description: 'Allows the creation of a relationship between a ticket and a tag.',
  tags: ['Ticket Tags'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketTagsPostDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The tag attached to the ticket',
      content: {
        'application/json': {
          schema: {
            $ref: ticketTagsPostDataFieldRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  get,
  post,
  parameters: [{
    $ref: ticketIdRef,
  }],
};

export default path;
