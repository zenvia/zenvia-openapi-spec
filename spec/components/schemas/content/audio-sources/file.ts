import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const text: SchemaObject = {
  title: 'Audio file',
  description: 'URL of audio',
  type: 'object',
  properties: {
    type:{
      type: 'string',
    },
    fileUrl: {
      description: 'URL of audio',
      type: 'string',
      example: 'http://fooooo.bar/audio.mp3',
      minLength: 1,
    },
  },
  required: [
    'type',
    'fileUrl',
  ],
};

export const ref = createComponentRef(__filename);
export default text;
