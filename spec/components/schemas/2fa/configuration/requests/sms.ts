import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const sms: SchemaObject = {
  title: 'SMS configuration',
  description: 'Information to send the token using SMS',
  type: 'object',
  properties: {
    from: {
      type: 'string',
      example: '559999999999',
      description: 'Contact of origin',
    },
    type: {
      default: 'sms',
      description: 'Channel used to send the token',
      example: 'sms' ,
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
