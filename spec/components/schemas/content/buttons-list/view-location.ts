// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from '../base';

const viewLocation: SchemaObject = {
  type: 'object',
  description: "Opens the standard calendar application on the user's device and creates a new event with the sent data.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.'
      },
      label: {
        type: 'string',
        description: 'Text to be displayed with the map position pin icon.'
      },
      latitude: {
        type: 'string',
        description: 'Latitude in degrees (range from -90.0 and +90.0).'
      },
      longitude: {
        type: 'string',
        description: 'Longitude in degrees (range from -180.0 and +180.0).'
      },
      query: {
        type: 'string',
        description: "Send text as an address to be searched in the default user's map application. An alternative to using latitude & longitude."
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back to the Agent when the user clicks the button.'
      },
    },
    required: [
      'type'
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default viewLocation;
