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
      query: {
        type: 'string',
        description: "A text, for example, an address or a company name, to be searched in the default user's map application.",
        example: 'Av. Paulista, 2300 - São Paulo',
      },
    },
    required: [
      'type',
      'text',
      'query',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default searchLocation;
