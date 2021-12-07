import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as multipartDataRef } from '../../components/schemas/files/multipart-data';
import { ref as fileRef } from '../../components/schemas/files/file';

const post: OperationObject = {
  summary: 'Create file',
  description: 'Allows the storage of files for later use.',
  tags: ['Files'],
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            content: {
              title: 'Binary File',
              description: 'Binary file content to be stored.',
              type: 'string',
            },
            file: {
              $ref: multipartDataRef,
            },
          },
          required: [
            'content',
          ],
        },
      },
      'application/json': {
        schema: {
          $ref: fileRef,
        },
      },
      '*/*': {
        schema: {
          title: 'Binary File',
          description: `The entire request body will be the file content to be stored.
                        <br><br>The main usage for this is for easier binary content streaming in the applications using this API.`,
          type: 'string',
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created file',
      headers: {
        Location: {
          description: 'The URL for created file object.',
          schema: {
            type: 'string',
          },
        },
      },
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
  post,
};

export default path;
