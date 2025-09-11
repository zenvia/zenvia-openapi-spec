import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketStatusDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-status';

const patch: OperationObject = {
  summary: 'Update ticket status',
  description: 'Allows to update ticket status.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketStatusDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket status updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketStatusDataFieldRef,
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
