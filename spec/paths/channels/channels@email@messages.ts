import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as emailMessageRef } from '../../components/schemas/message/email';
import { ref as errorResponseRef } from '../../components/responses/error';
import { email as emailExample } from '../../resources/examples/email';
import { template as templateExample } from '../../resources/examples/template';

const post: OperationObject = {
  description: 'Send a E-Mail message',
  tags: ['E-Mail'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: emailMessageRef,
        },
        examples: {
          email: {
            value: emailExample(),
          },
          template: {
            value: templateExample(),
          },
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
            $ref: emailMessageRef,
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
