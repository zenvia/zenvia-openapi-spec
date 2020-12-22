import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as smsMessageRef } from '../../components/schemas/message/sms';
import { ref as errorResponseRef } from '../../components/responses/error';
import { text as textExample } from '../../resources/examples/text';

const post: OperationObject = {
  description: 'Send a SMS message',
  tags: ['SMS'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: smsMessageRef,
        },
        examples: {
          text: {
            value: textExample,
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
            $ref: smsMessageRef,
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
