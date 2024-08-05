import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from '../base';
import { createComponentRef } from '../../../../../utils/ref';

const orderStatus: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'order_status',
      },
      body: {
        type: 'string',
        description: 'Body content',
        example: 'Text body content',
        maxLength: 1024,
      },
      footer: {
        type: 'string',
        description: 'Footer content',
        example: 'Text footer content',
        maxLength: 60,
      },
      parameters: {
        type: 'object',
        properties: {
          referenceId: {
            type: 'string',
            description: 'The unique identifier of the order provided in the order_details message. This cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots.',
            maxLength: 35,
            pattern: '^[A-Za-z0-9_\\-\\.]+$',
          },
          order: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                description: 'The status of the order.',
                enum: ['pending', 'processing', 'partially-shipped', 'shipped', 'completed', 'canceled'],
              },
              description: {
                type: 'string',
                description: 'The optional description of the order status.',
                maxLength: 120,
              },
            },
            required: ['status'],
          },
        },
        required: ['referenceId', 'order'],
      },
    },
    required: ['type', 'body', 'parameters'],
  }],
};

export const ref = createComponentRef(__filename);
export default orderStatus;
