import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './../base';
import { ref as ttsRef } from '../tts';
import { ref as audioFileRef } from '../audiofile';
import { createComponentRef } from '../../../../../utils/ref';

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'call',
      },
      audio: {
        description: 'A sequence of audio bits forming an message to be played on the start of the call',
        type: 'array',
        items: {
          anyOf: [{
            $ref: ttsRef,
          }, {
            $ref: audioFileRef,
          }],
          discriminator: {
            propertyName: 'type',
            mapping: {
              tts: ttsRef,
              file: audioFileRef,
            },
          },
        },
      },
      transferTo: {
        description: 'Transfer or call to another number after the (optional) audio message has been played',
        type: 'string',
        example: '5511999999999',
      },
      recordAudio: {
        description: 'To record the call',
        type: 'boolean',
        example: true,
      },
      hangUpOnVoiceMail: {
        description: 'End the call on voice mail',
        type: 'boolean',
        example: true,
      },
    },
    required: [
      'type',
    ],
  }],

};

export const ref = createComponentRef(__filename);
export default text;
