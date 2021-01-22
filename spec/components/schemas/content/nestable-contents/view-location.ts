import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const viewLocation: SchemaObject = {
  type: 'object',
  description: "Opens the standard calendar application on the user's device and creates a new event with the sent data.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        example: 'Visit us',
      },
      label: {
        type: 'string',
        description: 'Text to be displayed with the map position pin icon.',
        example: 'Zenvia',
      },
      latitude: {
        type: 'string',
        description: 'Latitude in degrees (range from -90.0 and +90.0).',
        example: '-23.557260',
      },
      longitude: {
        type: 'string',
        description: 'Longitude in degrees (range from -180.0 and +180.0).',
        example: '-46.661030',
      },
      payload: {
        example: 'location-viewed',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default viewLocation;
