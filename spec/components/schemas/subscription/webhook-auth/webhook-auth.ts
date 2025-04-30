import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as oauthRef } from './oauth';

const subscription: SchemaObject = {
  type: 'object',
  properties: {
    type: {
      title: 'Type of authentication',
      type: 'string',
      enum: [
        'OAUTH',
      ],
      default: 'OAUTH',
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
      allOf: [{
        $ref: oauthRef,
      }, {
        type: 'object',
        required: ['grantType', 'clientSecret', 'clientId'],
      }],
    },
  },
};

export const ref = createComponentRef(__filename);
export default subscription;
