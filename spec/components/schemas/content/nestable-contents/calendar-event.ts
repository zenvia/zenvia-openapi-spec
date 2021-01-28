import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const calendarevent: SchemaObject = {
  type: 'object',
  description: "Opens the standard calendar application on the user's device and creates a new event with the sent data.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      startTime: {
        type: 'string',
        description: 'Start date and time of the event formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
        example: '2021-01-15T17:30:00-03:00',
      },
      endTime: {
        type: 'string',
        description: 'End date and time of the event formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
        example: '2021-01-15T17:30:00-03:00',
      },
      title: {
        type: 'string',
        description: 'Event description.',
        example: 'API development',
      },
    },
    required: [
      'type',
      'text',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default calendarevent;
