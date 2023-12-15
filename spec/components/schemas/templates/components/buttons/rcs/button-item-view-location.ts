// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../../utils/ref';
import { ref as baseRef } from '../button-item-base';
import { ref as btnTextRef } from '../button-item-text';
import { ref as btnPayloadRef } from './button-item-payload';

const viewLocationButton: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseRef },
    { $ref: btnTextRef },
    { $ref: btnPayloadRef },
    {
      type: 'object',
      properties: {
        latitude: {
          title: 'Latitude of coordinates',
          description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].',
          minimum: -90,
          maximum: 90,
          type: 'number',
        },
        longitude: {
          title: 'Longitude of coordinates',
          description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
          minimum: -180,
          maximum: 180,
          type: 'number',
        },
        label: {
          title: 'Location label',
          description: 'The label of the pin dropped on the map of the user.',
          type: 'string',
        },
      },
      required: [
        'type',
        'text',
        'latitude',
        'longitude',
      ],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default viewLocationButton;
