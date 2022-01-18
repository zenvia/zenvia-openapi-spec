import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
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
  },
};

const path: PathItemObject = {
  get,
  parameters: [{
    $ref: fileIdRef,
  }],
};

export default path;
