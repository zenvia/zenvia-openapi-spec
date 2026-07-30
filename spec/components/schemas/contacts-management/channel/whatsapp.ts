// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const base: SchemaObject = {
  title: 'WhatsApp',
  type: 'object',
  properties: {
    type: {
      title: 'Type',
      description: 'Contact communication channel type.',
      type: 'string',
      enum: ['whatsapp'],
      example: 'whatsapp',
    },
    id: {
      title: 'ID',
      description: 'Contact\'s WhatsApp identifier (phone number or bsuid).',
      type: 'string',
      example: '5511999999999',
    },
    idType: {
      title: 'ID Type',
      description: 'Type of the WhatsApp ID.',
      type: 'string',
      enum: ['bsuid', 'parent_bsuid'],
      example: 'bsuid',
    },
    username: {
      title: 'Username',
      description: 'Username associated with the channel.',
      type: 'string',
    },
    senderId: {
      title: 'Sender ID',
      description: 'Sender identifier associated with the channel.',
      type: 'string',
    },
  },
  required: ['type', 'id'],
};

export const ref = createComponentRef(__filename);
export default base;
