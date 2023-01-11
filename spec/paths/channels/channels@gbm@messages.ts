import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as gbmMessageRef } from '../../components/schemas/message/gbm';
import { gbmExamples } from '../../resources/examples/from-to/gbm';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';
import { replyableText as replyableExample } from '../../resources/examples/replyable-text';

const post: OperationObject = {
  description: 'Send a Google Business Messages message',
  tags: ['Google Business Messages'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: gbmMessageRef,
        },
        examples: {
          text: {
            value: gbmExamples(textExample()),
          },
          file: {
            value: gbmExamples(fileExample()),
          },
          card : {
            value: gbmExamples(cardExample()),
          },
          carousel: {
            value: gbmExamples(carouselExample()),
          },
          replyable_text: {
            value: gbmExamples(replyableExample()),
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
