import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const button: SchemaObject = {
  type: 'object',
  title: 'Button',
  description: 'Details about the button clicked.',
  properties: {
    type: {
      title: 'Type',
      description: 'Type of the clicked button.',
      type: 'string',
      enum: [
        'text',
        'link',
        'calendar_event',
        'dial',
        'share_location',
        'view_location',
        'search_location',
      ],
    },
    payload: {
      title: 'Payload',
      description: 'Payload of the clicked button.',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default button;
