import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as templateSchemaRef } from '../../components/schemas/templates/template';
import { ref as templateCreateSchemaRef } from '../../components/schemas/templates/create/all';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as channel } from '../../components/parameters/templates/channel';
import { ref as senderId } from '../../components/parameters/templates/senderId';
import { ref as status } from '../../components/parameters/templates/status';
import { ref as size } from '../../components/parameters/templates/size';
import { ref as page } from '../../components/parameters/page';

const post: OperationObject = {
  description: 'Create a new template',
  tags: ['Templates'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: templateCreateSchemaRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created template',
      content: {
        'application/json': {
          schema: {
            $ref: templateCreateSchemaRef,
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const get: OperationObject = {
  description: 'List all templates',
  tags: ['Templates'],
  parameters: [
    {
      $ref: channel,
    },
    {
      $ref: senderId,
    },
    {
      $ref: status,
    },
    {
      $ref: page,
    },
    {
      $ref: size,
    },
  ],
  responses: {
    200: {
      description: 'Template Object List',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: templateSchemaRef,
            },
          } as SchemaObject,
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of results available.',
            type: 'string',
            example: '100',
          },
        },
        'x-page-size': {
          schema: {
            description: 'The number of results per page.',
            type: 'string',
            example: '10',
          },
        },
        'x-page': {
          schema: {
            description: 'The current page.',
            type: 'string',
            example: '5',
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
  post,
  get,
};

export default path;
