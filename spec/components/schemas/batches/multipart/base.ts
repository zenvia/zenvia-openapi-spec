// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';
import { ref as messageRef } from './message';
import { ref as columnMapper } from './columnMapper';

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
        $ref: columnMapper,
      },
      message: {
        $ref: messageRef,
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
