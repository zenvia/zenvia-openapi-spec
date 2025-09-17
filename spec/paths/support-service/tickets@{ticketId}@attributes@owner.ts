import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketOwnerDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-owner';

const patch: OperationObject = {
  summary: 'Update ticket owner',
  description: 'Allows to update ticket owner.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketOwnerDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket owner updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketOwnerDataFieldRef,
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
  patch,
  parameters: [{
    $ref: ticketIdRef,
  }],
};

export default path;
