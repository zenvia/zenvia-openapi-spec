// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from '../button-item-base';
import { ref as btnTextRef } from '../button-item-text';
import { ref as btnPayloadRef } from './button-item-payload'

const calendarEventButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    { $ref: btnPayloadRef },
    {
      properties: {
        description: {
          title: 'Event description',
          description: 'A description of the calendar event to be sent inside the card.',
          type: 'string',
        },
        title: {
          title: 'Event title',
          description: 'A title for the calendar event to be sent inside the card.',
          type: 'string',
        },
        startTime: {
          title: 'Event start time',
          description: "Start date and time of the event. Usage of ISO standard for the date is highly recommended.",
          type: 'string',
        },
        endTime: {
          title: 'Event end time',
          description: "End date and time of the event. Usage of ISO standard for the date is highly recommended.",
          type: 'string',
        },
      },
    type: 'object',
    required: [
      'type',
      'text',
      'description',
      'title',
      'startTime',
      'endTime',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default calendarEventButton;
