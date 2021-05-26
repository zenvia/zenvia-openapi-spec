import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as voiceMessageRef } from '../../components/schemas/message/voice';
import { ref as errorResponseRef } from '../../components/responses/error';
import { tts as ttsExample } from '../../resources/examples/tts';
import { audiofile as audiofileExample } from '../../resources/examples/audiofile';

const post: OperationObject = {
  description: 'Send a Voice message',
  tags: ['Voice'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: voiceMessageRef,
        },
        examples: {
          tts: {
            value: ttsExample(),
          },
          file: {
            value: audiofileExample(),
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
            $ref: voiceMessageRef,
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
