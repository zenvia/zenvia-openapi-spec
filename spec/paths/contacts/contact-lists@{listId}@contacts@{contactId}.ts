import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as listIdRef } from '../../components/parameters/contacts/listId';
import { ref as contactIdRef } from '../../components/parameters/contacts/contactId';

const del: OperationObject = {
  summary: 'Remove contact from a list',
  description: 'Allows to remove one contact from a list.',
  tags: ['Contact Lists'],
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
    $ref: listIdRef,
  }, {
    $ref: contactIdRef,
  }],
};

export default path;
