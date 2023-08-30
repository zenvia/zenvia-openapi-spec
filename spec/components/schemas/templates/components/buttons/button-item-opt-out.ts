// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';

const optOutButton: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      payload: {
        type: 'string',
        title: 'Payload of button',
        description: 'This payload is used for identify the click in the callback',
        default: 'OPTOUT_ZENVIA_WHATSAPP_MARKETING',
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
export default optOutButton;
