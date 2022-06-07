import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as fileRef } from '../../components/schemas/files/file';
import { ref as fileIdRef } from '../../components/parameters/files/fileId';

const get: OperationObject = {
  summary: 'Retrieve one file by id',
  description: 'Allows to retrieve information about one previously stored file.',
  tags: ['Files'],
  responses: {
    200: {
      description: 'File object',
      content: {
        'application/json': {
          schema: {
            $ref: fileRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const del: OperationObject = {
  summary: 'Delete file by id',
  description: 'Allows to delete one previously stored file.',
  tags: ['Files'],
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
  get,
  delete: del,
  parameters: [{
    $ref: fileIdRef,
  }],
};

export default path;
