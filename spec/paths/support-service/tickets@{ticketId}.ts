import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketDataFieldRef } from '../../components/schemas/support-service/tickets';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';

const get: OperationObject = {
  summary: 'Retrieve ticket by id',
  description: 'Retrieve all ticket information by id.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  parameters: [],
  responses: {
    200: {
      description: 'Ticket object',
      content: {
        'application/json': {
          schema: {
            $ref: ticketDataFieldRef,
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
  parameters: [{
    $ref: ticketIdRef,
  }],
};

export default path;
