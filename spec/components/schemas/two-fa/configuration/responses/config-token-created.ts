import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as tokenref } from '../requests/token';
import { ref as verifyref } from '../requests/verify';
import { ref as deliveryref } from '../requests/delivery';
import { ref as contentref } from '../requests/content';
import { ref as websiteref } from '../requests/website';

const tokenConfigResponse: SchemaObject = {
  type: 'object',
  description: 'Token configuration created response',
  properties: {
    id: {
      type: 'string',
      example: '11401560-bffb-4ef3-a08e-989a15ed3c32',
    },
    token: {
      title: 'Token Properties',
      description: 'Holds the token properties like size, mode and case',
      type: 'object',
      $ref: tokenref,
    },
    verify: {
      title: 'Verification properties',
      description: 'Holds the maxAttempts of trying to check the token and the expire time',
      type: 'object',
      $ref: verifyref,
    },
    delivery: {
      title: 'Delivery properties',
      description: 'Holds the maxAttempts and the time to send the user response',
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
    createdAt: {
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
    updatedAt: {
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default tokenConfigResponse;
