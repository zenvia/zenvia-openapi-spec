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
        type: 'string',
        description: 'Longitude of the location',
      },
      latitude: {
        type: 'string',
        description: 'Latitude of the location',
      },
      name: {
        type: 'string',
        description: 'Name of the location',
      },
      address: {
        type: 'string',
        description: 'Address of the location. Only displayed if name is present.',
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
