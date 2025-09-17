import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketServiceDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-service';

const patch: OperationObject = {
  summary: 'Update ticket service',
  description: 'Allows to update ticket service.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketServiceDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket service updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketServiceDataFieldRef,
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
