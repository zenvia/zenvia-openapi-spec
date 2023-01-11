import { SchemaObject } from 'openapi3-ts';
import { ref as smsRef } from './sms';
import { ref as emailRef } from './email';
import { createComponentRef } from '../../../../../../utils/ref';

const language: SchemaObject = {
  title: 'Configurations by locales',
  description: "It's possible to configure different settings to different locations. It's required to configure at least one channel `(sms or email)`",
  type: 'object',
  properties: {
    sms: {
      title: 'SMS config',
      description: 'SMS configuration details',
      type: 'object',
      $ref: smsRef,
    },
    email: {
      title: 'E-mail config',
      description: 'Email configuration details',
      type: 'object',
      $ref: emailRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default language;
