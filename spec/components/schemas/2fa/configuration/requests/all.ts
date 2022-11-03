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
      title: 'Token Properties',
      description: 'The token properties like size, mode and case',
      type: 'object',
      $ref: tokenRef,
    },
    verify: {
      title: 'Verification properties',
      description: 'Configuration properties to verify a token',
      type: 'object',
      $ref: verifyRef,
    },
    delivery: {
      title: 'Delivery properties',
      description: 'Configuration properties to deliver a token to the user',
      type: 'object',
      $ref: deliveryRef,
    },
    content: {
      title: 'Message contents',
      description: 'Location and and sender information',
      type: 'string',
      $ref: contentRef,
    },
    website: {
      title: 'Site and app domains',
      description: 'Allowed domains',
      type: 'object',
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
