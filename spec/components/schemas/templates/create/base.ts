import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as localeSchemaRef } from '../template-locale';
import { ref as commentSchemaRef } from '../template-comment';
import { ref as examplesSchemaRef } from '../template-example';
import { ref as notificationEmailSchemaRef } from '../template-notification-email';
import { ref as metadataRef } from '../template-metadata';

const templateBase: SchemaObject = {
  title: 'Template Object',
  description: 'This is a Template object model',
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
    channel: {
      title: 'Channel',
      description: 'Channel where the template will be made available.',
      type: 'string',
      enum: ['WHATSAPP', 'SMS', 'RCS', 'EMAIL', 'FACEBOOK'],
    },
    id: {
      title: 'Template ID',
      type: 'string',
      readOnly: true,
    },
    name: {
      title: 'Template name',
      description: 'The name of the template',
      type: 'string',
    },
    locale: {
      $ref: localeSchemaRef,
    },
    examples: {
      $ref: examplesSchemaRef,
    },
    senderId: {
      title: 'Sender ID',
      description: 'The identifier of the sender of the template. The sender should be created with a credential.',
      type: 'string',
    },
    metadata: {
      $ref: metadataRef,
    },
    notificationEmail: {
      $ref: notificationEmailSchemaRef,
    },
    text: {
      title: 'Template text',
      description: 'A text reference for the template. This field encompasses all content components.',
      type: 'string',
      readOnly: true,
    },
    fields: {
      title: 'Fields',
      description: 'The available fields to be used in this template',
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 0,
      readOnly: true,
    },
    comments: {
      title: 'Comments',
      description: 'Comments added to the template during the approval process',
      type: 'array',
      readOnly: true,
      items: {
        $ref: commentSchemaRef,
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
        'PAUSED',
        'DISABLED',
      ],
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
export default templateBase;
