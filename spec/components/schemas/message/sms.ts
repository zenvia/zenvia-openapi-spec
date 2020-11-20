import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allContentsRef } from '../content/sms/all';
import { createComponentRef } from '../../../../utils/ref';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      contents: {
        items: {
          $ref: allContentsRef,
        },
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
