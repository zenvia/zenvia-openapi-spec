// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './../../base';

const postback: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text:{
        type: 'string',
        description: 'Text to be send',
        title: 'Hello World',
      },
      payload: {
        type: 'string',
        title: 'Payload of button',
        description: 'This payload is used for identify the click in the callback',
      },
    },
    required: [
      'type',
      'text',
      'payload',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default postback;
