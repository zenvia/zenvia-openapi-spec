import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as ticketCategoryDataFieldRef } from '../../components/schemas/support-service/ticket-attribute-category';

const patch: OperationObject = {
  summary: 'Update ticket category',
  description: 'Allows to update ticket category.',
  tags: ['Tickets'],
  security: [{
    TOKEN: [],
  }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: ticketCategoryDataFieldRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ticket category updated',
      content: {
        'application/json': {
          schema: {
            $ref: ticketCategoryDataFieldRef,
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
