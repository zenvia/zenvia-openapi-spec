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
      description: 'Contact\'s WhatsApp identifier. Either a phone number (digits only) or a bsuid prefixed with the ISO 3166 alpha-2 two-letter country code and a period, followed by up to 128 alphanumeric characters (for example, US.13491208655302741918).',
      type: 'string',
      pattern: '^([0-9]+|[A-Z]{2}\\.[A-Za-z0-9]{1,128})$',
      example: 'US.13491208655302741918',
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
  required: ['type', 'id', 'idType'],
};

export const ref = createComponentRef(__filename);
export default base;
