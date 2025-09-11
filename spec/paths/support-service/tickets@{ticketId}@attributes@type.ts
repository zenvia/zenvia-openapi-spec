import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketTypeDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-type';

const patch: OperationObject = {
  summary: 'Update ticket type',
  description: 'Allows to update ticket type.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketTypeDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket type updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketTypeDataFieldRef,
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
