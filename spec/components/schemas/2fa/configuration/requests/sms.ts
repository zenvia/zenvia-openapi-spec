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
      description: 'SMS sender id',
    },
    type: {
      default: 'text',
      type: 'string',
      description: 'Type of message to be sent',
      example: 'text' ,
    },
    text: {
      type: 'string',
      description: 'Default text to be sent',
      default: 'Hello {{name}}! Your code is {{code}}',
    },
  },
  required: ['from'],
};

export const ref = createComponentRef(__filename);
export default sms;
