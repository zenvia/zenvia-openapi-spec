import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as gbmMessageRef } from '../../components/schemas/message/gbm';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';

const post: OperationObject = {
  description: 'Send a Google Business Message message',
  tags: ['Google Business Message'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: gbmMessageRef,
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
            $ref: gbmMessageRef,
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
