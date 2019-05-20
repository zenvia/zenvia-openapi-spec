import { SchemaObject } from "openapi3-ts";
import { ref as baseRef } from './base';
import { createComponentRef } from "../../../../utils/ref";

const text: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        title: 'Text to be sent',
        type: 'string',
      }
    },
    required: [
      'text',
    ],
  }]
};

export const ref = createComponentRef(__filename);
export default text;
