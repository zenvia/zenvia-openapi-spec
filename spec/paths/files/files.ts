import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as multipartDataRef } from '../../components/schemas/files/multipart-data';
import { ref as fileRef } from '../../components/schemas/files/file';
import { ref as startDate } from '../../components/parameters/files/startTimestamp';
import { ref as endDate } from '../../components/parameters/files/endTimestamp';
import { ref as limit } from '../../components/parameters/files/limit';

const post: OperationObject = {
  summary: 'Create a new file',
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

const get: OperationObject = {
  description: 'Get list of files',
  tags: ['Files'],
  parameters: [
    {
      $ref: startDate,
    },
    {
      $ref: endDate,
    },
    {
      $ref: limit,
    },
  ],
  responses: {
    200: {
      description: 'Files found',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: fileRef,
            },
          },
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The number of results',
            type: 'string',
            example: '100',
          },
        },
      },
    } as ResponseObject,
  },
};

const path: PathItemObject = {
  post,
  get,
};

export default path;
