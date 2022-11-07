import { SchemaObject } from 'openapi3-ts';
import { ref as tokenRef } from './token';
import { ref as verifyRef } from './verify';
import { ref as deliveryRef } from './delivery';
import { ref as contentRef } from './content';
import { ref as websiteRef } from './website';
import { createComponentRef } from '../../../../../../utils/ref';

const tokenConfig: SchemaObject = {
  title: 'Token configuration',
  description: 'Token configuration to generate and deliver tokens',
  type: 'object',
  properties: {
    token: {
      $ref: tokenRef,
    },
    verify: {
      $ref: verifyRef,
    },
    delivery: {
      $ref: deliveryRef,
    },
    content: {
      $ref: contentRef,
    },
    website: {
      $ref: websiteRef,
    },
  },
  required: [
    'token',
    'verify',
    'delivery',
    'content',
  ],
};

export const ref = createComponentRef(__filename);
export default tokenConfig;
