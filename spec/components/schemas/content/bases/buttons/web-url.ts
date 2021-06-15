import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as baseRef } from './base';

const weburl: SchemaObject = {
  type: 'object',
  description: "Opens a URL on user's device and sends the payload field content to the Agent.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'URL to be accessed upon click.',
        example: 'https://zenvia.com/',
      },
    },
    required: [
      'type',
      'text',
      'url',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default weburl;
