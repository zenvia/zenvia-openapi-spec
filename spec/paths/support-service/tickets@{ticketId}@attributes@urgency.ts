import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketUrgencyDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-urgency';

const patch: OperationObject = {
  summary: 'Update ticket urgency',
  description: 'Allows to update ticket urgency.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketUrgencyDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket urgency updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketUrgencyDataFieldRef,
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
