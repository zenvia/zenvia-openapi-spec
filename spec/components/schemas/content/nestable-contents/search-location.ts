import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const searchLocation: SchemaObject = {
  type: 'object',
  description: "Opens the standard calendar application on the user's device and creates a new event with the sent data.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.',
        example: 'Visit us',
      },
      label: {
        type: 'string',
        description: 'Text to be displayed with the map position pin icon.',
        example: 'Zenvia',
      },
      query: {
        type: 'string',
        description: "A text, for example, an address or a company name, to be searched in the default user's map application.",
        example: 'Av. Paulista, 2300 - São Paulo',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back as a message event when the user clicks the button.',
        example: 'location-searched',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default searchLocation;
