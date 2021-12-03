import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as instagramMessageRef } from '../../components/schemas/message/instagram';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';

const post: OperationObject = {
  description: 'Send a Instagram message',
  tags: ['Instagram'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: instagramMessageRef,
        },
        examples: {
          text: {
            value: textExample(),
          },
          file: {
            value: fileExample(),
          },
          replyable_text: {
            value: replyableTextExample(),
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
            $ref: instagramMessageRef,
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
