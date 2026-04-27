import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../message-status-base';
import { createComponentRef } from '../../../../../utils/ref';

const terminatedRef: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        example: 'TERMINATED',
      },
      details: {
        type: 'object',
        description: 'Details of the call termination',
        properties: {
          startTime: {
            type: 'string',
            description: 'Start time of the call',
          },
          endTime: {
            type: 'string',
            description: 'End time of the call',
          },
          durationSeconds: {
            type: 'number',
            description: 'Duration of the call in seconds',
          },
        },
      },
    },
    required: ['code'],
  }],
};


export const ref = createComponentRef(__filename);
export default terminatedRef;
