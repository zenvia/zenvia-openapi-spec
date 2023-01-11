import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as instagramMessageRef } from '../../components/schemas/message/instagram';
import { instagramExamples } from '../../resources/examples/from-to/instagram';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { optInRequest as optInRequestExample } from '../../resources/examples/optInRequest';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';

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
            value: instagramExamples(textExample()),
          },
          file: {
            value: instagramExamples(fileExample()),
          },
          replyable_text: {
            value: instagramExamples(replyableTextExample()),
          },
          card : {
            value: instagramExamples(cardExample()),
          },
          carousel: {
            value: instagramExamples(carouselExample()),
          },
          optin_request: {
            value: instagramExamples(optInRequestExample()),
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
