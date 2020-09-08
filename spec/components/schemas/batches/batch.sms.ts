// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as textContentRef } from '../content/text';

const obj: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      message: {
        type: 'object',
        properties: {
          from: {
            title: 'Sender ID',
            description: 'This is the identifier of sender of this message. The sender shoud be created with a credential.',
            type: 'string',
          },
          contents: {
            type: 'array',
            items: {
              oneOf: [{
                $ref: textContentRef,
              }],
              discriminator: {
                propertyName: 'type',
                mapping: {
                  text: textContentRef,
                },
              },
            },
          },
        },
      },
    },
    required: [
      'message'
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default obj;
