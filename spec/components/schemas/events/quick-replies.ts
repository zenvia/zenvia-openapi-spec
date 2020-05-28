import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as clickRef } from '../message/quick-replies';
import { createComponentRef } from '../../../../utils/ref';

const callback: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        title: 'Event type',
        type: 'string',
        enum: [
          'MESSAGE',
          'MESSAGE_STATUS',
        ],
        example: 'MESSAGE',
      },
      direction: {
        title: 'Message Direction',
        type: 'string',
      },
      channel: {
        title: 'Message channel',
        type: 'string',
      },
      message: {
        $ref: clickRef,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default callback;
