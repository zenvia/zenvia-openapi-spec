// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';

const messageEvent: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      prop1: {
        title: 'Prop1',
        type: 'string',
      },
      prop2: {
        title: 'Prop2',
        type: 'string',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
