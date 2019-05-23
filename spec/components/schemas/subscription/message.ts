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
      criteria: {
        type: 'object',
        properties: {
          channel: {
            title: 'Message channel',
            type: 'string',
          },
          direction: {
            title: 'Direction of message to subscribe',
            type: 'string',
            enum: ['IN', 'OUT'],
          }
        },
        required: ['channel', 'direction'],
      }
    },
    required: [
      'text',
    ],
  }]
};

export const ref = createComponentRef(__filename);
export default text;
