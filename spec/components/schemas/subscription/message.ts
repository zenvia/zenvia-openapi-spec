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
            title: 'Message direction',
            description: 'Direction of message to subscribe. When the direction is not defined all directions will be selected',
            type: 'string',
            enum: ['IN', 'OUT'],
          }
        },
        required: ['channel'],
      }
    },
    required: [ 'criteria' ],
  }]
};

export const ref = createComponentRef(__filename);
export default text;
