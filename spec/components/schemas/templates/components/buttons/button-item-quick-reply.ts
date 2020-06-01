// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const quickReplyButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      payload: {
        title: 'Payload of button',
        description: 'This payload is used for identify the click in the callback',
      },
    },
    required: [
      'text',
      'url',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default quickReplyButton;
