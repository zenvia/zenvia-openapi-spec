import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  title: 'Conversation Content',
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      solution: {
        title: 'Solution Name',
        type: 'string',
        description: 'If the contact replies to the API message, the conversation will be redirected to the chosen solution.',
        enum: ['conversion', 'zenvia_chat', 'nlu'],
      },
    },
    required: [
      'solution',
    ],
  }],
};


export const ref = createComponentRef(__filename);
export default all;
