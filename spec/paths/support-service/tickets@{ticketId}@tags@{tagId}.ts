import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as tagIdRef } from '../../components/parameters/support-service/tagId';

const del: OperationObject = {
  summary: 'Delete tag from ticket',
  description: 'Allows to delete a tag from ticket.',
  tags: ['Ticket Tags'],
  responses: {
    204: {
      description: 'No content',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  delete: del,
  parameters: [{
    $ref: ticketIdRef,
  }, {
    $ref: tagIdRef,
  }],
};

export default path;
