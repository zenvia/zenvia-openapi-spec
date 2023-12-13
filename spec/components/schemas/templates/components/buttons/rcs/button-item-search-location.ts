// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from '../button-item-base';
import { ref as btnTextRef } from '../button-item-text';
import { ref as btnPayloadRef } from './button-item-payload';

const searchLocationButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    { $ref: btnPayloadRef },
    {
      type: 'object',
      properties: {
        query: {
            title: 'Location query',
            description: 'For default map apps, button click results in a location search centered around the user\'s current location',
            type: 'string',
          },
      },
      required: [
        'type',
        'text',
        'query',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default searchLocationButton;
