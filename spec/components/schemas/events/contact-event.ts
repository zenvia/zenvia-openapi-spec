import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseEventRef } from './base';
import { ref as contactRef } from '../contacts-management/contact';

const contactEvent: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseEventRef },
    {
      type: 'object',
      properties: {
        type: {
          title: 'Event type',
          type: 'string',
          enum: [
            'CONTACT',
          ],
          example: 'CONTACT',
        },
        action: {
          title: 'Contact event operation type',
          type: 'string',
          enum: [
            'CREATED',
            'DELETED',
            'UPDATED',
          ],
        },
        contact: {
          $ref: contactRef,
        },
      },
      required: ['action, contact'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default contactEvent;
