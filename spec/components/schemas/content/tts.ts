import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const text: SchemaObject = {
  title: 'Text to speech',
  description: 'Send a text to speech',
  type: 'object',
  properties: {
    type:{
      type: 'string',
    },
    text: {
      description: 'Text that will be read in the call with the chosen voice type',
      type: 'string',
      example: 'This is a text',
    },
    voiceStyle: {
      type: 'string',
      description: 'Language and type of the audio message',
      enum: [
        'br-Camila',
        'br-Vitoria',
        'br-Ricardo',
        'en-Joey',
        'en-Joanna',
        'fre-Celine',
        'fre-Mathieu',
        'ger-Vicki',
        'ger-Hans',
        'ita-Carla',
        'ita-Giorgio',
        'jap-Mizuki',
        'pol-Jan',
        'rus-Tatyana',
        'rus-Maxim',
        'esp-Conchita',
        'esp-Enrique',
      ],
      default: 'br-Vitoria',
      example: 'br-Ricardo',
    },
    awaitRecipientAnswer: {
      description: 'Await recipient answer',
      type: 'boolean',
      example: true,
    },
  },
  required: [
    'type',
    'text',
  ],
};

export const ref = createComponentRef(__filename);
export default text;
