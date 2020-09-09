// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as multipartBaseRef } from './base';
import { ref as textContentRef } from './content/text';

const obj: SchemaObject = {
  allOf: [{
    $ref: multipartBaseRef,
  }, {
    type: 'object',
    properties: {
      message: {
        type: 'object',
        properties: {
          contents: {
            type: 'array',
            items: {
              anyOf: [{
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
  }],
};

export const ref = createComponentRef(__filename);
export default obj;
