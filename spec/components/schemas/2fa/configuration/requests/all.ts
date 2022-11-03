import { SchemaObject } from 'openapi3-ts';
import { ref as tokenref } from './token';
import { ref as verifyref } from './verify';
import { ref as deliveryref } from './delivery';
import { ref as contentref } from './content';
import { ref as websiteref } from './website';
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
      $ref: tokenref,
    },
    verify: {
      title: 'Verification properties',
      description: 'Configuration properties to verify a token',
      type: 'object',
      $ref: verifyref,
    },
    delivery: {
      title: 'Delivery properties',
      description: 'Configuration properties to deliver a token to the user',
      type: 'object',
      $ref: deliveryref,
    },
    content: {
      title: 'Message contents',
      description: 'It has the language and sender information',
      type: 'string',
      $ref: contentref,
    },
    website: {
      title: 'Site and app domains',
      description: 'Allowed domains',
      type: 'object',
      $ref: websiteref,
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
