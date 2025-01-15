// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from './button-item-base';
import { ref as btnTextRef } from './button-item-text';

const urlButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    {
      type: 'object',
      properties: {
        url: {
          title: 'URL of button',
          description: 'URL to be sent in the button. It can be dynamic',
          type: 'string',
        },
      },
      required: [
        'type',
        'text',
        'url',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default urlButton;
