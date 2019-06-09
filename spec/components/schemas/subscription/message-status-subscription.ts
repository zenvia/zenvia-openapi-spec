// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      criteria: {
        type: 'object',
        properties: {
          channel: {
            title: 'Message channel',
            type: 'string',
          },
        },
        required: ['channel'],
      },
    },
    required: ['criteria'],
  }],
};

export const ref = createComponentRef(__filename);
export default subscription;
