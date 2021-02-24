import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const text: SchemaObject = {
  title: 'Audio file',
  description: 'URL of the audio file that will be played to the recipient',
  type: 'object',
  properties: {
    type:{
      type: 'object',
    },
    fileUrl: {
      description: 'URL of audio',
      type: 'string',
      example: 'http://fooooo.bar/audio.mp3',
      },
  },
    required: [
      'type',
      'fileUrl',
    ],
};

export const ref = createComponentRef(__filename);
export default text;
