import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as facebookMessageRef } from '../../components/schemas/message/facebook';
import { text as textExample } from '../../resources/examples/text';
import { file as fileExample } from '../../resources/examples/file';

const post: OperationObject = {
  description: 'Send a Facebook message',
  tags: ['Facebook'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: facebookMessageRef,
        },
        examples: {
          text: {
            value: textExample(),
          },
          file: {
            value: fileExample(),
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
            $ref: facebookMessageRef,
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
