// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';
import { ref as btnTextRef } from './button-item-text';

const quickReplyButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    {
    type: 'object',
    properties: {
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
export default quickReplyButton;
