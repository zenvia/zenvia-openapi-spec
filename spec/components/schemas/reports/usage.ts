import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const usageResponseBase: SchemaObject = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      productType: {
        description: 'The product type for this usage entry.',
        type: 'string',
        enum: ['flow', 'sms', 'app', 'voice'],
      },
      productId: {
        description: 'The product ID.',
        type: 'string',
      },
      channel: {
        description: 'The channel for this usage entry.',
        type: 'string',
        enum: ['chat', 'sms', 'facebook', 'whatsapp'],
      },
      type: {
        description: 'The type for this usage entry.',
        type: 'string',
        enum: ['activation', 'conversation', 'interaction'],
      },
      total: {
        description: 'The total usage for this type.',
        type: 'number',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default usageResponseBase;
