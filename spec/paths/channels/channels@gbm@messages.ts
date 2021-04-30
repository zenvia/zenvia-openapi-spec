import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as gbmMessageRef } from '../../components/schemas/message/gbm';
import { text as textExample } from '../../resources/examples/text';

const post: OperationObject = {
  description: 'Send a Google Business Message message',
  tags: ['gbm'],
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
