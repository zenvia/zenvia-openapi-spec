import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketSubjectDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-subject';

const patch: OperationObject = {
  summary: 'Update ticket subject',
  description: 'Allows to update ticket subject.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketSubjectDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket subject updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketSubjectDataFieldRef,
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
