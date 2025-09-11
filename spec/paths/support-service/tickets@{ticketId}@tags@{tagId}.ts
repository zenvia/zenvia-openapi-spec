import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ticketIdRef } from '../../components/parameters/support-service/ticketId';
import { ref as tagIdRef } from '../../components/parameters/support-service/tagId';
import { ref as updatedByIdRef } from '../../components/parameters/support-service/updatedById';

const del: OperationObject = {
  summary: 'Delete the relationship between a tag and a ticket',
  description: 'Allows to delete the relationship between a tag and a ticket.',
  tags: ['Ticket Tags'],
  parameters: [{
      $ref: updatedByIdRef,
  }],
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
