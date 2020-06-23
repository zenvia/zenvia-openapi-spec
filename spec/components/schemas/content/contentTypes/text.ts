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
      direction: {
        title: 'Message Direction',
        type: 'string',
      },
      channel: {
        title: 'Message channel',
        type: 'string',
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default messageEvent;
