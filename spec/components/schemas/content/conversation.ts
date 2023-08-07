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
        description: 'If the user replies to the API message, the conversation will be redirected to the chosen solution.',
        example: 'livechat',
        enum: ['conversion', 'livechat', 'nlu'],
      },
    },
  }],
};


export const ref = createComponentRef(__filename);
export default all;
