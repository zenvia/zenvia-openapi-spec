// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseRef } from './base';
import { ref as templateContentRef } from '../content/template';

const obj: SchemaObject = {
  title: 'Batch Object',
  description: 'This is a Batch object model.',
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      contents: {
        type: 'array',
        items: {
          oneOf: [{
            $ref: templateContentRef,
          }],
          discriminator: {
            propertyName: 'type',
            mapping: {
              template: templateContentRef,
            },
          },
        },
      },
    },
    required: [
      'message',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default obj;
