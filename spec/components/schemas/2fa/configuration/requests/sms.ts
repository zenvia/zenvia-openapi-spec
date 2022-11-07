import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const sms: SchemaObject = {
  title: 'SMS configuration',
  description: 'Information to send the token using SMS',
  type: 'object',
  properties: {
    from: {
      type: 'string',
      description: 'Contact of origin',
    },
    type: {
      default: 'email',
      description: 'Channel used to send the token',
      enum: ['text', 'email'],
    },
    text: {
      type: 'string',
      description: 'Default text to be sent',
      default: 'Olá {{nome}}! Seu código de verificação é {{code}}',
    },
  },
  required: ['from'],
};

export const ref = createComponentRef(__filename);
export default sms;
