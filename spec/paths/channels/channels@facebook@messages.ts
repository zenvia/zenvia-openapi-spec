import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as facebookMessageRef } from '../../components/schemas/message/facebook';
import { text as textExample } from '../../resources/examples/text';
import { file as fileExample } from '../../resources/examples/file';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';

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
          card: {
            value: cardExample(),
          },
          carousel: {
            value: carouselExample(),
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
