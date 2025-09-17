import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketClientsDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-clients';

const patch: OperationObject = {
  summary: 'Update ticket clients',
  description: 'Allows to update ticket clients.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketClientsDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket clients updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketClientsDataFieldRef,
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
