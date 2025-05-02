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
      minLength: 1,
      pattern: '/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/',
    },
    headers: {
      title: 'Authentication request headers',
      type: 'object',
      additionalProperties: {
        oneOf: [{
          type: 'string',
          example: 'Zenvia',
        }, {
          type: 'number',
          example: 1,
        }, {
          type: 'boolean',
          example: true,
        }],
      },
    },
    queryParams: {
      title: 'Authentication request query params',
      type: 'object',
      additionalProperties: {
        oneOf: [{
          type: 'string',
          example: 'Zenvia',
        }, {
          type: 'number',
          example: 1,
        }, {
          type: 'boolean',
          example: true,
        }],
      },
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
