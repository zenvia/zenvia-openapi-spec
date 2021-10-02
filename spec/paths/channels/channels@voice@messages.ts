import { PathItemObject, OperationObject, ResponseObject } from 'openapi3-ts';
import { ref as voiceMessageRef } from '../../components/schemas/message/voice';
import { ref as errorResponseRef } from '../../components/responses/error';
import { tts as ttsExample } from '../../resources/examples/tts';
import { tts_transferTo as ttsTransferToExample } from '../../resources/examples/ttsTransferto';
import { audiofile as audiofileExample } from '../../resources/examples/audiofile';
import { audiofileTransferTo as audiofileTransferToExample } from '../../resources/examples/audiofileTransferTo';

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
          tts_transferTo: {
            value: ttsTransferToExample(),
          },
          file: {
            value: audiofileExample(),
          },
          file_transferTo: {
            value: audiofileTransferToExample(),
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
