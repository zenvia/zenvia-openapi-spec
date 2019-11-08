// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as statusRef } from './status';

const base: SchemaObject = {
  title: 'Template Object',
  description: 'This is a Template object model.',
  type: 'object',
  properties: {
    id: {
      title: 'Template ID',
      type: 'string',
      readOnly: true,
    },
    text: {
      title: 'Template text',
      description: 'The text message of this template',
      type: 'string',
    },
    fields: {
      title: 'Fields',
      description: 'The available fields to be used in this template.',
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 0,
    },
    channels: {
      title: 'Channels',
      description: 'Channels where this template can be used',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: {
            title: 'Template type',
            type: 'string',
            enum: [
              'WHATSAPP',
              'FACEBOOK',
              'SMS',
            ],
          },
          senderId: {
            title: 'Sender ID',
            type: 'string',
          },
          status: {
            $ref: statusRef,
          },
        },
      },
      minItems: 1,
    },
    createdAt: {
      title: 'Creation timestamp',
      description: 'Creation timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
    updatedAt: {
      title: 'Update timestamp',
      description: 'Update timestamp in ISO format',
      type: 'string',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
