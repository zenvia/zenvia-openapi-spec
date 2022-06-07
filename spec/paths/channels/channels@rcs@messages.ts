import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as rcsMessageRef } from '../../components/schemas/message/rcs';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';
import { template as templateExample } from '../../resources/examples/template';

const post: OperationObject = {
  description: 'Send a RCS message',
  tags: ['RCS'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: rcsMessageRef,
        },
        examples: {
          text: {
            value: textExample(),
          },
          template: {
            value: templateExample(),
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
            $ref: rcsMessageRef,
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
