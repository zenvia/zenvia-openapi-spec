import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as telegramMessageRef } from '../../components/schemas/message/telegram';
import { telegramExamples } from '../../resources/examples/from-to/telegram';
import { file as fileExample } from '../../resources/examples/file';
import { card as cardExample } from '../../resources/examples/card';
import { replyableText as replyableTextExample } from '../../resources/examples/replyable-text';
import { text as textExample } from '../../resources/examples/text';

const post: OperationObject = {
  description: 'Send a Telegram message',
  tags: ['Telegram'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: telegramMessageRef,
        },
        examples: {
          text: {
            value: telegramExamples(textExample()),
          },
          file: {
            value: telegramExamples(fileExample()),
          },
          card: {
            value: telegramExamples(cardExample()),
          },
          replyable_text: {
            value: telegramExamples(replyableTextExample()),
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
            $ref: telegramMessageRef,
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
