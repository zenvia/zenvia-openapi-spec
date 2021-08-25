import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const location: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'location',
      },
      longitude: {
        type: 'number',
        description: 'Longitude of the location',
        example: -122.425332,
      },
      latitude: {
        type: 'number',
        description: 'Latitude of the location',
        example: 37.758056,
      },
      name: {
        type: 'string',
        description: 'Name of the location',
        example: 'Home',
      },
      address: {
        type: 'string',
        description: 'Address of the location. Only displayed if name is present.',
        example: 'Home Address',
      },
      url: {
        type: 'string',
        description: 'URL for the website where the location information was downloaded _(WhatsApp restriction: available only on IN direction)_',
        example: 'https://www.zenvia.com',
      },
    },
    required: [
      'type',
      'longitude',
      'latitude',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default location;
