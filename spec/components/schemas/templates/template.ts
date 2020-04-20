// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as localeSchemaRef } from './template-locale';
import { ref as categorySchemaRef } from './template-category';
import { ref as componentsSchemaRef } from './template-components';
import { ref as notificationEmailSchemaRef } from './template-notification-email';

const template: SchemaObject = {
  title: 'Template Object',
  description: 'This is a Template object model.',
  type: 'object',
  required: [
    'name',
    'locale',
    'channel',
    'senderId',
    'category',
    'components',
  ],
  properties: {
    id: {
      title: 'Template ID',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Template name',
      description: 'The name of this template',
      type: 'string',
    },
    locale: {
      $ref: localeSchemaRef,
    },
    channel: {
      title: 'Channel',
      description: 'Channel for template use. For now, only WHATSAPP channel is allowed.',
      type: 'string',
      enum: ['WHATSAPP'],
    },
    senderId: {
      title: 'Sender ID',
      description: 'This is the identifier of sender for this template. The sender shoud be created with a credential.',
      type: 'string',
    },
    category: {
      $ref: categorySchemaRef,
    },
    components: {
      $ref: componentsSchemaRef,
    },
    notificationEmail: {
      $ref: notificationEmailSchemaRef,
    },
    text: {
      title: 'Template text',
      description: 'This is a text reference for this template. This field is a merge of all content components.',
      type: 'string',
      readOnly: true,
    },
    fields: {
      title: 'Fields',
      description: 'The available fields to be used in this template.',
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 0,
      readOnly: true,
    },
    comments: {
      title: 'Comments',
      description: 'Comments added to the template during the approval process.',
      type: 'array',
      readOnly: true,
      items: {
        type: 'object',
        properties: {
          author: {
            title: 'Author',
            description: 'Comment author',
            type: 'string',
          },
          role: {
            title: 'Role',
            description: 'Author role',
            type: 'string',
            enum: ['REQUESTER', 'REVIEWER', 'WHATSAPP'],
          },
          text: {
            title: 'Text',
            description: 'Comment text',
            type: 'string',
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
      },
    },
    status: {
      title: 'Status of template',
      type: 'string',
      readOnly: true,
      enum: [
        'WAITING_REVIEW',
        'REJECTED',
        'WAITING_APPROVAL',
        'APPROVED',
      ],
    },
    channels: {
      title: 'Channels',
      description: 'Channels where this template can be used. _Deprecated attribute, can be removed on next API versions._',
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
            title: 'Status of template',
            type: 'string',
            enum: [
              'APPROVED',
              'REFUSED',
              'PENDING',
              'CANCELED',
            ],
          },
        },
      },
      minItems: 1,
      maxItems: 1,
      readOnly: true,
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
export default template;
