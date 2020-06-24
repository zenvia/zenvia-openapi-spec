import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const contacts: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'contacts',
      },
      contacts: {
        description: 'A list of contacts',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            addresses: {
              description: 'A list of contact addresses',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  street: {
                    description: 'Street number and name',
                    type: 'string',
                    example: 'Street Address, 123',
                  },
                  city: {
                    description: 'City name',
                    type: 'string',
                    example: 'City name',
                  },
                  state: {
                    description: 'State abbreviation',
                    type: 'string',
                    example: 'SP',
                  },
                  zip: {
                    description: 'ZIP code',
                    type: 'string',
                    example: '01000-000',
                  },
                  country: {
                    description: 'Full country name',
                    type: 'string',
                    example: 'Brazil',
                  },
                  countryCode: {
                    description: 'Two-letter country abbreviation',
                    type: 'string',
                    example: 'BR',
                  },
                  type: {
                    description: 'The type of the address',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
                    example: 'WORK',
                  },
                },
              },
              minItems: 0,
            },
            birthday: {
              description: 'The birthday of the contact',
              type: 'string',
              example: '11/10/1980',
            },
            contactImage: {
              description: 'Base64-encoded image. Its value has to be a string based on the Base64 Data Encodings specification (RFC 4648).',
              type: 'string',
            },
            emails: {
              description: 'A list of e-mails',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  email: {
                    description: 'E-mail address',
                    type: 'string',
                    example: 'my-email@email-domain.com',
                  },
                  type: {
                    description: 'The type of e-mail',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
                    example: 'HOME',
                  },
                },
              },
              minItems: 0,
            },
            ims: {
              description: 'A list of messaging contact information',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  service: {
                    description: 'Instant messaging service name',
                    type: 'string',
                    example: 'This is a messaging service',
                  },
                  userId: {
                    description: 'User identifier in this instant messaging service',
                    type: 'string',
                    example: 'johnsmith',
                  },
                },
              },
              minItems: 0,
            },
            name: {
              description: 'Full contact name',
              type: 'object',
              properties: {
                formattedName: {
                  description: 'Full name as it normally appears',
                  type: 'string',
                  example: 'John Megan Smith',
                },
                firstName: {
                  description: 'First name',
                  type: 'string',
                  example: 'John',
                },
                lastName: {
                  description: 'Last name',
                  type: 'string',
                  example: 'Smith',
                },
                middleName: {
                  description: 'Middle name',
                  type: 'string',
                  example: 'Megan',
                },
                suffix: {
                  description: 'Name suffix',
                  type: 'string',
                  example: 'PhD',
                },
                prefix: {
                  description: 'Name preffix',
                  type: 'string',
                  example: 'Mr.',
                },
              },
              required: [
                'formattedName',
                'firstName',
              ],
            },
            org: {
              title: 'Organization',
              description: 'Contact organization information',
              type: 'object',
              properties: {
                company: {
                  description: 'Name of the contact\'s company',
                  type: 'string',
                  example: 'Ms. Sara',
                },
                department: {
                  description: 'Name of the contact\'s department',
                  type: 'string',
                  example: 'Sales',
                },
                title: {
                  description: 'Contact\'s business title',
                  type: 'string',
                  example: 'Manager',
                },
              },
            },
            phones: {
              description: 'A list of contact phone numbers',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  phone: {
                    description: 'Formatted phone number',
                    type: 'string',
                    example: '+5521999998888',
                  },
                  type: {
                    description: 'The type of the phone number',
                    type: 'string',
                    enum: [
                      'CELL',
                      'MAIN',
                      'IPHONE',
                      'HOME',
                      'WORK',
                    ],
                    example: 'CELL',
                  },
                  waId: {
                    description: 'WhatsApp ID _(supported channels: WhatsApp)_',
                    type: 'string',
                  },
                },
              },
              minItems: 0,
            },
            urls: {
              description: 'A list of contact URLs',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  url: {
                    description: 'URL',
                    type: 'string',
                    example: 'https://www.zenvia.com',
                  },
                  type: {
                    description: 'The type of the phone number',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
                    example: 'WORK',
                  },
                },
              },
              minItems: 0,
            },
          },
          required: [
            'name',
          ],
        },
        minItems: 1,
      },
    },
    required: [
      'type',
      'contacts',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default contacts;
