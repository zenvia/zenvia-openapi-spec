// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

const base: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      columnMapper: {
        type: 'object',
      },
      message: {
        type: 'object',
        properties: {
          from: {
            title: 'Sender ID',
            description: 'This is the identifier of sender of this message. The sender shoud be created with a credential.',
            type: 'string',
          },
          contents: {
            title: 'Message Contents',
            description: 'A list of content to be sent',
            type: 'array',
            items: {
              type: 'object',
            },
          },
        },
      },
    },
    required: [
      'message',
      'columnMapper',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default base;
