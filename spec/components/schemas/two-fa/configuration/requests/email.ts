import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const email: SchemaObject = {
  title: 'Email configuration',
  type: 'object',
  properties: {
    from: {
      description: 'Email sender id',
      type: 'string',
    },
    type: {
      default: 'email',
      enum: ['sms', 'email'],
    },
    subject: {
      type: 'string',
      description: 'email subject',

    },
    html: {
      type: 'string',
      default: 'Olá {{name}}! Seu código de verificação é {{code}}',
    },
  },
  required: [
    'from',
    'type',
    'subject',
  ],
};

export const ref = createComponentRef(__filename);
export default email;
