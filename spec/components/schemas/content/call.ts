import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allAudioRef } from './audio-sources/all';
import { createComponentRef } from '../../../../utils/ref';

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
        description: 'A sequence of audio bits forming a message to be played at the beginning of the call',
        type: 'array',
        items: {
          $ref: allAudioRef,
        },
      },
      transferTo: {
        description: 'Transfer or call to another number when the audio message has been completely played',
        type: 'string',
        example: '5510999999999',
      },
      recordAudio: {
        description: 'Record the call',
        type: 'boolean',
        example: true,
      },
      hangUpOnVoiceMail: {
        description: 'End the call on voicemail',
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
