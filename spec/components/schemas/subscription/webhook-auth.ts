import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as oauthRef } from './auth/oauth';

const subscription: SchemaObject = {
  type: 'object',
  required: ['type', 'url', 'oauth'],
  properties: {
    type: {
      title: 'Type of authentication',
      type: 'string',
      enum: [
        'OAUTH',
      ],
    },
    url: {
      title: 'Webhook Auth URL',
      description: 'URL to authenticate webhook',
      type: 'string',
    },
    headers: {
      title: 'Authentication request headers',
      type: 'object',
    },
    queryParams: {
      title: 'Authentication request query params',
      type: 'object',
    },
    oauth: {
      $ref: oauthRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default subscription;
