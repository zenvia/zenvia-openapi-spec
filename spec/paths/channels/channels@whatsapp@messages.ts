import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as sentMessageRef } from '../../components/schemas/message/whatsapp/sent';
import { ref as errorRef } from '../../components/schemas/error/base';

const post: OperationObject = {
  description: 'Send a WhatsApp message',
  operationId: 'messageCreate',
  tags: ['WhatsApp'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: sentMessageRef,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created message',
      content: {
        'application/json': {
          schema: {
            $ref: sentMessageRef,
          },
        },
      },
    } as ResponseObject,
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: {
            $ref: errorRef,
          },
        },
      },
    } as ResponseObject,
  },
};

const path: PathItemObject = {
  post,
};

export default path;
