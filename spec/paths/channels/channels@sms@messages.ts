import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as smsMessageRef } from '../../components/schemas/message/sms';
import { ref as errorResponseRef } from '../../components/responses/error';
import { smsExamples } from '../../resources/examples/from-to/sms';
import { text as textExample } from '../../resources/examples/text';
import { template as templateExample } from '../../resources/examples/template';

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
            value: smsExamples(textExample()),
          },
          template: {
            value: smsExamples(templateExample()),
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
