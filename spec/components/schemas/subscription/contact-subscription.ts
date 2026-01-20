// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const subscription: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      criteria: {
        type: 'object',
        properties: {
          action: {
            title: 'Contact events to subscribe to',
            description: 'Configure one or more contact-type events to subscribe to',
            type: 'array',
            minItems: 1,
            items: {
              type: 'string',
              enum: [
                'CREATED',
                'DELETED',
                'UPDATED',
              ],
            },
          },
        },
        required: ['action'],
      },
    },
    required: ['criteria'],
  }],
};

export const ref = createComponentRef(__filename);
export default subscription;
