// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

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
      },
      startTime: {
        type: 'string',
        description: 'Start date & time of the event (UTC format).',
      },
      endTime: {
        type: 'string',
        description: 'End date & time of the event (UTC format).',
      },
      title: {
        type: 'string',
        description: 'Event description.',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back to the Agent when the user clicks the button.',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default calendarevent;
