// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as channelRef } from '../message/channel';
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
            $ref: channelRef,
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
