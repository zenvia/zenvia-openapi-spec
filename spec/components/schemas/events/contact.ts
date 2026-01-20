import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as baseConversationRef } from './base-conversation-message';

const contactEvent: SchemaObject = {
  type: 'object',
  allOf: [
    { $ref: baseConversationRef },
    {
      type: 'object',
      properties: {
          type: {
            title: 'Event type',
            type: 'string',
            enum: [
              'CONTACT',
            ],
            example: 'CONTACT',
          },
        action: {
          title: 'Contact event operation type',
          type: 'string',
          enum: [
            'CREATED',
            'DELETED',
            'UPDATED',
          ],
        },
        contact: {
          title: 'Contact event',
          description: '',
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier for the contact event.',
              example: '7d19ca81-6366-4ccc-9715-6ad68113ce3c',
            },
            organizationId: {
              type: 'string',
              description: 'The ID of the organization the contact belongs to.',
              example: 'a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
            },
            firstName: {
              type: 'string',
              description: 'Contact first name',
              example: 'Alan Turing',
            },
            birthdate: {
              title: 'Contact\'s birth date',
              description: 'Contact\'s birthdate',
              type: 'string',
              example: '1912-06-23',
            },
            addresses: {
              description: 'A list of contact addresses',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  addresss: {
                    description: 'Street number and name',
                    type: 'string',
                    example: 'Street Address, 123',
                  },
                  zipcode: {
                    description: 'ZIP code',
                    type: 'string',
                    example: '01000-000',
                  },
                  city: {
                    description: 'City name',
                    type: 'string',
                    example: 'Sao Paulo',
                  },
                  state: {
                    description: 'State abbreviation',
                    type: 'string',
                    example: 'SP',
                  },
                  country: {
                    description: 'Full country name',
                    type: 'string',
                    example: 'Brazil',
                  },
                },
              },
              minItems: 0,
            },
            customData: {
              type: 'object',
              description: '',
              additionalProperties: {
                type: 'string',
                example: {
                  football_team: 'Internacional',
                  exercises_regularly: 'yes',
                  favorite_hobby: 'Skating',
                },
              },
            },
            channels: {
              type: 'object',
              properties: {
                mobile: {
                  type: 'string',
                  example: '5551994147667',
                },
              },
            },
            lists: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['c01b44fb-3eb7-483d-bd0f-331c8036d887', '549d3530-1908-4204-85b1-b4725cc4a9ec'],
            },
            createdAt: {
              type: 'string',
              description: 'The creation date of the contact, in ISO 8601 format.',
              example: '2025-07-30T19:55:42.321Z',
            },
            updatedAt: {
              type: 'string',
              description: 'The date and time of the last update made on the contact, in ISO 8601 format.',
              example: '2025-07-30T19:56:10.123Z',
            },
          },
        },
      },
      required: ['action, contact'],
    },
  ],
};

export const ref = createComponentRef(__filename);
export default contactEvent;
