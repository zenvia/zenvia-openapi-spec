import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const text: SchemaObject = {
    title: 'Text to speech',
    description: 'Send a text to speech',
    type: 'object',
    properties: {
      type:{
        type: 'object',
      },
      text: {
        description: 'Text that will be read in the call with the chosen voice type',
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
    required: [
      'type',
      'text',
    ],
};

export const ref = createComponentRef(__filename);
export default text;
