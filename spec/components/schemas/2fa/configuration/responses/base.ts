import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as tokenref } from '../requests/token';
import { ref as verifyref } from '../requests/verify';
import { ref as deliveryref } from '../requests/delivery';
import { ref as contentref } from '../requests/content';
import { ref as websiteref } from '../requests/website';

const tokenConfigResponse: SchemaObject = {
  title: 'Token Configuration Creation',
  type: 'object',
  description: 'Token configuration created response',
  properties: {
    id: {
      title: 'Token Configuration Id',
      type: 'string',
      description: 'The configuration unique id',
      example: '11401560-bffb-4ef3-a08e-989a15ed3c32',
    },
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
    createdAt: {
      title: 'Creation Timestamp',
      description: 'Timestamp of the configuration token creation',
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
    updatedAt: {
      title: 'Update timestamp',
      description: 'Timestamp of the token updates',
      type: 'string',
      example: '2022-10-27T13:25:11.354Z',
    },
  },
};

export const ref = createComponentRef(__filename);
export default tokenConfigResponse;
