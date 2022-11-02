import { SchemaObject } from 'openapi3-ts';
import { ref as smsref } from './sms';
import { ref as emailref } from './email';
import { createComponentRef } from '../../../../../../utils/ref';

const language: SchemaObject = {
  title: 'Configurations by locales',
  description: 'Configuration for different localizations',
  type: 'object',
  properties: {
    default: {
      title: 'Default locale',
      type: 'boolean',
      description: 'The default localization configuration',
    },
    sms: {
      title: 'SMS config',
      description: 'SMS configuration details',
      type: 'object',
      $ref: smsref,
    },
    email: {
      title: 'E-mail config',
      description: 'Email configuration details',
      type: 'object',
      $ref: emailref,
    },
  },
  required: ['sms', 'email'],
};

export const ref = createComponentRef(__filename);
export default language;
