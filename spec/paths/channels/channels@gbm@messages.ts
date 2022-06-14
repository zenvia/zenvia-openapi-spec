import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as gbmMessageRef } from '../../components/schemas/message/gbm';
import { file as fileExample } from '../../resources/examples/file';
import { text as textExample } from '../../resources/examples/text';
import { card as cardExample } from '../../resources/examples/card';
import { carousel as carouselExample } from '../../resources/examples/carousel';
import { replyableText as replyableExample } from '../../resources/examples/replyable-text';
import { representativeExample } from '../../resources/examples/representative';

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
            value: { ...textExample(), ...representativeExample() },
          },
          file: {
            value: { ...fileExample(), ...representativeExample() },
          },
          card : {
            value: { ...cardExample(), ...representativeExample() },
          },
          carousel: {
            value: { ...carouselExample(), ...representativeExample() },
          },
          replyable_text: {
            value: { ...replyableExample(), ...representativeExample() },
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
