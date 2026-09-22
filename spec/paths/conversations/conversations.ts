import {
  PathItemObject,
  OperationObject,
  SchemaObject,
  ResponseObject,
  ResponsesObject,
} from 'openapi3-ts';
import { ref as conversationSchemaRef } from '../../components/schemas/conversations/conversation';
import { ref as createRequestRef } from '../../components/schemas/conversations/create-request';
import { ref as createResponseRef } from '../../components/schemas/conversations/create-response';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as ids } from '../../components/parameters/conversations/ids';
import { ref as status } from '../../components/parameters/conversations/status';
import { ref as groupIds } from '../../components/parameters/conversations/groupIds';
import { ref as contactId } from '../../components/parameters/conversations/contactId';
import { ref as user } from '../../components/parameters/conversations/user';
import { ref as hasPendingMessages } from '../../components/parameters/conversations/hasPendingMessages';
import { ref as closeReason } from '../../components/parameters/conversations/closeReason';
import { ref as search } from '../../components/parameters/conversations/search';
import { ref as hasOpenSession } from '../../components/parameters/conversations/hasOpenSession';
import { ref as sortBy } from '../../components/parameters/conversations/sortBy';
import { ref as direction } from '../../components/parameters/conversations/direction';
import { ref as cursor } from '../../components/parameters/conversations/cursor';
import { ref as limit } from '../../components/parameters/conversations/limit';

const get: OperationObject = {
  description: 'List conversations for the organization, optionally filtered.',
  tags: ['Conversations'],
  parameters: [
    { $ref: ids },
    { $ref: status },
    { $ref: groupIds },
    { $ref: contactId },
    { $ref: user },
    { $ref: hasPendingMessages },
    { $ref: closeReason },
    { $ref: search },
    { $ref: hasOpenSession },
    { $ref: sortBy },
    { $ref: direction },
    { $ref: cursor },
    { $ref: limit },
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
        'x-has-next': {
          schema: {
            description: 'Whether there is a next page.',
            type: 'string',
            example: 'true',
          },
        },
        'x-limit': {
          schema: {
            description: 'The page size that was applied.',
            type: 'string',
            example: '20',
          },
        },
        'x-next-cursor': {
          schema: {
            description: 'Opaque cursor for the next page, present only when x-has-next is true.',
            type: 'string',
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
            $ref: createResponseRef,
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
