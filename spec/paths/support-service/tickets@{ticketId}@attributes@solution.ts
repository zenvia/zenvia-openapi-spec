import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketSolutionAtDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-solution';

const patch: OperationObject = {
  summary: 'Update ticket solution',
  description: 'Allows to update ticket solution.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketSolutionAtDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket solution at updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketSolutionAtDataFieldRef,
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
