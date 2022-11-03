import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';
import { ref as tokenRef } from '../requests/token';
import { ref as verifyRef } from '../requests/verify';
import { ref as deliveryRef } from '../requests/delivery';
import { ref as contentRef } from '../requests/content';
import { ref as websiteRef } from '../requests/website';

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
      description: 'It has the language and sender information',
      type: 'string',
      $ref: contentRef,
    },
    website: {
      title: 'Site and app domains',
      description: 'Allowed domains',
      type: 'object',
      $ref: websiteRef,
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
