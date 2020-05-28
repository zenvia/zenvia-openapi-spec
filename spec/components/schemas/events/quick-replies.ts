import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const callback: SchemaObject = {
  title: 'Quick Replies Callback',
  description: 'This is a Callback object model',
  type: 'object',
  properties: {
    type: {
      title: 'Type of callback',
      format: 'application/vnd.zenvia.v1.event.click+json',
      type: 'string',
    },
    payload: {
      title: 'Payload of callback',
      type: 'object',
      properties: {
        json:{
          title: 'Json object',
          type: 'object',
          properties: {
            text: {
              title: 'Text of selected button',
              type: 'string',
            },
            payload: {
              title: 'Payload of selected button',
              type: 'string',
            },
          },
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default callback;
