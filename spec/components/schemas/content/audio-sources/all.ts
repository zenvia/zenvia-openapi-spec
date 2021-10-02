import { SchemaObject } from 'openapi3-ts';
import { ref as ttsRef } from './tts';
import { ref as fileRef } from './file';
import { createComponentRef } from '../../../../../utils/ref';

const all: SchemaObject = {
  oneOf: [{
    $ref: ttsRef,
  }, {
    $ref: fileRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      tts: ttsRef,
      file: fileRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default all;
