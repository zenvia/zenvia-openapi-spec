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
    required: [
      'message',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default obj;
