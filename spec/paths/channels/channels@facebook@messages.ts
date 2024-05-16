import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as facebookMessageRef } from '../../components/schemas/message/facebook';
import { facebookExamples } from '../../resources/examples/from-to/facebook';
import { text as textExample } from '../../resources/examples/text';
import { file as fileExample } from '../../resources/examples/file';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';
import { optInRequest as optInRequestExample } from '../../resources/examples/optInRequest';
import { template as templateExample } from '../../resources/examples/template';

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
            value: facebookExamples(textExample()),
          },
          file: {
            value: facebookExamples(fileExample()),
          },
          template: {
            value: facebookExamples(templateExample()),
          },
          card: {
            value: facebookExamples(cardExample()),
          },
          carousel: {
            value: facebookExamples(carouselExample()),
          },
          replyable_text: {
            value: facebookExamples(replyableTextExample()),
          },
          optin_request: {
            value: facebookExamples(optInRequestExample()),
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
