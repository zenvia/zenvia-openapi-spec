import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as errorCauseRef } from './error-cause';
import { ref as contextRef } from './context';
import { ref as channelDataRef } from './channel-data';
import { createComponentRef } from '../../../../utils/ref';

const journeyChannelMessageStatusEvent: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        title: 'Event type',
        type: 'string',
        enum: [
          'JOURNEY_CHANNEL_MESSAGE_STATUS',
        ],
        example: 'JOURNEY_CHANNEL_MESSAGE_STATUS',
      },
      channel: {
        title: 'Message Channel',
        type: 'string',
        example: 'whatsapp',
      },
      messageStatus: {
        title: 'Message Status',
        type: 'object',
        properties: {
          timestamp: {
            title: 'Status timestamp',
            description: 'Timestamp of the message status. Usually received from the provider of the channel.',
            type: 'string',
            format: 'date-time',
            example: '2026-10-13T14:05:12.480Z',
          },
          code: {
            title: 'Status code',
            description: 'Code that indicates the message status',
            type: 'string',
            example: 'DELIVERED',
          },
          description: {
            title: 'Status description',
            description: 'A description of status',
            type: 'string',
            example: 'The message has been delivered by the provider',
          },
          causes: {
            title: 'Status causes',
            description: 'A list of errors or cause of status',
            type: 'array',
            items: {
              $ref: errorCauseRef,
            },
          },
          context: {
            $ref: contextRef,
          },
          channelData: {
            $ref: channelDataRef,
          },
          direction: {
            title: 'Message Status Direction',
            description: `Indicates whether the message status is received from a channel (**IN**) or sent to a channel (**OUT**).

* **IN**: Received status.
* **OUT**: Sent status.`,
            type: 'string',
            enum: [
              'IN',
              'OUT',
            ],
          },
        },
        required: [
          'code',
          'timestamp',
        ],
      },
      message: {
        title: 'Message',
        type: 'object',
        properties: {
          id: {
            title: 'Message ID',
            description: 'ID of the message whose status is being delivered',
            type: 'string',
            example: '0dceea1c-fd93-4cf3-a9ce-45e012c8a192',
          },
          externalId: {
            title: 'Message External ID',
            description: 'A customizable identifier for dispatches, allowing users to customize and track their dispatches within the API. Present only when the message has one.',
            type: 'string',
          },
          from: {
            type: 'string',
            description: 'Contact of origin',
            example: '5511940001234',
          },
          to: {
            type: 'string',
            description: 'Recipient contact',
            example: '5511998887777',
          },
          contentIndex: {
            title: 'Content Index',
            description: 'Index of content that is receiving the status update',
            type: 'number',
            example: 0,
          },
          direction: {
            title: 'Message Direction',
            description: `Indicates whether the message is received from a channel (**IN**) or sent to a channel (**OUT**).

  * **IN**: Received messages.
  * **OUT**: Sent messages.`,
            type: 'string',
            enum: [
              'IN',
              'OUT',
            ],
          },
        },
        required: [
          'id',
          'contentIndex',
          'direction',
        ],
      },
      contact: {
        title: 'Contact',
        description: 'Contact of the journey execution. Present only when the execution has a contact.',
        type: 'object',
        properties: {
          id: {
            title: 'Contact ID',
            type: 'string',
            example: 'e7c1a9f2-3b5d-4f8e-a1c3-5d7f9b1e3a50',
          },
        },
        required: ['id'],
      },
      journey: {
        title: 'Journey',
        description: 'Journey that sent the message',
        type: 'object',
        properties: {
          id: {
            title: 'Journey ID',
            type: 'string',
            example: '9f4d3e21-7a8b-4c5d-8e9f-0a1b2c3d4e5f',
          },
          versionId: {
            title: 'Journey version ID',
            type: 'string',
            example: '3b8e1f0a-6c2d-4e9b-a7f1-5d3c9e0b2a64',
          },
          versionTag: {
            title: 'Journey version tag',
            description: 'Tag of the journey version. Executions of versions in homologation (any value other than `published`, such as `homol`) also generate events.',
            type: 'string',
            example: 'published',
          },
          executionId: {
            title: 'Journey execution ID',
            type: 'string',
            example: 'c1d2e3f4-5a6b-4c7d-8e9f-0a1b2c3d4e5f',
          },
          externalId: {
            title: 'Journey execution external ID',
            description: 'External identifier informed when the journey execution was started',
            type: 'string',
            example: 'pedido-48213',
          },
          node: {
            title: 'Journey node',
            description: 'Node of the journey that sent the message',
            type: 'object',
            properties: {
              id: {
                title: 'Node ID',
                type: 'string',
                example: '14d4632c-54bf-4cfd-a34f-e098a46ad6d7',
              },
              title: {
                title: 'Node title',
                description: 'Present only when the node has a title',
                type: 'string',
                example: 'WhatsApp - Confirmação',
              },
              type: {
                title: 'Node type',
                type: 'string',
                example: 'whatsapp',
              },
            },
            required: [
              'id',
              'type',
            ],
          },
        },
        required: [
          'id',
          'versionId',
          'versionTag',
          'executionId',
          'externalId',
        ],
      },
    },
    required: [
      'type',
      'channel',
      'messageStatus',
      'message',
      'journey',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default journeyChannelMessageStatusEvent;
