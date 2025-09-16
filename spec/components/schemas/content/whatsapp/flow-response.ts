import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const flowResponse: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'flow',
      },
      token: {
        type: 'string',
        description: 'Flow token',
        example: 'TOKEN_FLOW',
      },
      body: {
        type: 'string',
        description: 'Body content',
        example: 'Text body content',
      },
      data: {
        title: 'Custom Data',
        description: 'Set values for custom data fields created.',
        type: 'object',
        additionalProperties: {
            title: 'Value',
            description: 'Sets a value to a custom data field (the property name).',
            oneOf: [{
            type: 'string',
            title: 'String',
            example: '2022234324',
            }, {
            type: 'number',
            title: 'Number',
            example: 10,
            }],
        },
      },      
    },
    required: [
      'type',
      'token'
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default flowResponse;
