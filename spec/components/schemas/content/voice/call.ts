import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './../base';
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
        description: 'A list of contacts',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            file: {
                title: 'Audio file',
                description: 'Send a audio file',
                type: 'object',
                properties: {
                    fileUrl: {
                    description: 'URL of audio',
                    type: 'string',
                    example: 'http://fooooo.bar/audio.mp3',
                    },
                },
            },
            tts: {
                title: 'Text to speech',
                description: 'Send a text to speech',
                type: 'object',
                properties: {
                    text: {
                    description: 'Text to be converted',
                    type: 'string',
                    example: 'This is a text',
                    },
                    voiceStyle: {
                        description: 'Language and type of the audio message',
                        type: 'string',
                        example: 'br-Ricardo',
                    },
                    awaitRecipientAnswer: {
                      description: 'Await recipient answer',
                      type: 'boolean',
                      example: true
                    }
                },
            },
          }
        }
      },
      transferTo: {
        description: 'Transfer or call to another number',
        type: 'string',
        example: '5511999999999',
      },
      recordAudio: {
        description: 'Record call',
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
