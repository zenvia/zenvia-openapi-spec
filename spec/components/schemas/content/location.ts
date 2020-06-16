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
      longitude: {
        type: 'number',
        description: 'Longitude of the location. Example: -122.425332',
      },
      latitude: {
        type: 'number',
        description: 'Latitude of the location. Example: 37.758056',
      },
      name: {
        type: 'string',
        description: 'Name of the location. Example: \'Home\'.',
      },
      address: {
        type: 'string',
        description: 'Address of the location. Only displayed if name is present. Example: \'Home Address\'.',
      },
      url: {
        type: 'string',
        description: 'URL for the website where the location information was downloaded _(WhatsApp restriction: available only on IN direction)_. Example: <a href="https://www.zenvia.com" target="_blank">\'https://www.zenvia.com\'</a>.',
      },
    },
    required: [
      'longitude',
      'latitude',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default location;
