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
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.',
        example: 'Add to calendar',
      },
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
      payload: {
        type: 'string',
        description: 'Content to be sent back as a message event when the user clicks the button.',
        example: 'scheduled',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default calendarevent;
