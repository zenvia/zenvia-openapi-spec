import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as conversationSchemaRef } from '../../components/schemas/conversations/conversation';
import { ref as createRequestRef } from '../../components/schemas/conversations/create-request';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as id } from '../../components/parameters/conversations/id';
import { ref as status } from '../../components/parameters/conversations/status';
import { ref as groupId } from '../../components/parameters/conversations/groupId';
import { ref as contactId } from '../../components/parameters/conversations/contactId';
import { ref as userId } from '../../components/parameters/conversations/userId';
import { ref as search } from '../../components/parameters/conversations/search';
import { ref as sort } from '../../components/parameters/conversations/sort';
import { ref as page } from '../../components/parameters/conversations/page';
import { ref as size } from '../../components/parameters/conversations/size';

const get: OperationObject = {
  description: 'List conversations for the organization, optionally filtered.',
  tags: ['Conversations'],
  parameters: [
    { $ref: id },
    { $ref: status },
    { $ref: groupId },
    { $ref: contactId },
    { $ref: userId },
    { $ref: search },
    { $ref: sort },
    { $ref: page },
    { $ref: size },
  ],
  responses: {
    200: {
      description: 'Conversations available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: conversationSchemaRef,
            },
          } as SchemaObject,
        },
      },
      headers: {
        'x-page': {
          schema: {
            description: 'The page number that was applied.',
            type: 'string',
            example: '1',
          },
        },
        'x-page-size': {
          schema: {
            description: 'The page size that was applied.',
            type: 'string',
            example: '20',
          },
        },
        'x-total': {
          schema: {
            description: 'The total number of conversations matching the filters.',
            type: 'string',
            example: '134',
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const post: OperationObject = {
  description: 'Create a conversation for a contact, or resume an existing one for the same contact.',
  tags: ['Conversations'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: createRequestRef,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Conversation created (or resumed)',
      content: {
        'application/json': {
          schema: {
            $ref: conversationSchemaRef,
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  post,
};

export default path;
