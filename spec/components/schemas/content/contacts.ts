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
                    description: 'Street number and name. Example: \"Street Address, 123\".',
                    type: 'string',
                  },
                  city: {
                    description: 'City name. Example: \"City name\".',
                    type: 'string',
                  },
                  state: {
                    description: 'State abbreviation. Example: \"SP\".',
                    type: 'string',
                  },
                  zip: {
                    description: 'ZIP code. Example: \"01000-000\".',
                    type: 'string',
                  },
                  country: {
                    description: 'Full country name. Example: \"Brazil\".',
                    type: 'string',
                  },
                  countryCode: {
                    description: 'Two-letter country abbreviation. Example: \"BR\".',
                    type: 'string',
                  },
                  type: {
                    description: 'The type of the address',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
                  },
                },
              },
              minItems: 0,
            },
            birthday: {
              description: 'The birthday of the contact. Example: \"11/10/1980\".',
              type: 'string',
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
                    description: 'E-mail address. Example: \"my-email@email-domain.com\".',
                    type: 'string',
                  },
                  type: {
                    description: 'The type of e-mail',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
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
                    description: 'Instant messaging service name. Example: \"This is a messaging service\".',
                    type: 'string',
                  },
                  userId: {
                    description: 'User identifier in this instant messaging service. Example: \"johnsmith\"',
                    type: 'string',
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
                  description: 'Full name as it normally appears. Example: \"John Megan Smith\".',
                  type: 'string',
                },
                firstName: {
                  description: 'First name. Example: \"John\".',
                  type: 'string',
                },
                lastName: {
                  description: 'Last name. Example: \"Smith\".',
                  type: 'string',
                },
                middleName: {
                  description: 'Middle name. Example: \"Megan\".',
                  type: 'string',
                },
                suffix: {
                  description: 'Name suffix. Example: \"Mr.\".',
                  type: 'string',
                },
                prefix: {
                  description: 'Name preffix. Example: \"D.Sc.\".',
                  type: 'string',
                },
              },
              required: [
                'formattedName',
                'firstName',
              ],
            },
            org: {
              title: 'Organization',
              description: 'Contact organization information. Example: \"Contact by organization home form or email\".',
              type: 'object',
              properties: {
                company: {
                  description: 'Name of the contact\'s company. Example: \"Ms. Sara\".',
                  type: 'string',
                },
                department: {
                  description: 'Name of the contact\'s department. Example: \"Sales\".',
                  type: 'string',
                },
                title: {
                  description: 'Contact\'s business title. Example: \"Manager\".',
                  type: 'string',
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
                    description: 'Formatted phone number. Example: \"+5521999998888\".',
                    type: 'string',
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
                    description: 'URL. Example: <a href="https://www.zenvia.com" target="_blank">\"https://www.zenvia.com\"</a>.',
                    type: 'string',
                  },
                  type: {
                    description: 'The type of the phone number',
                    type: 'string',
                    enum: [
                      'HOME',
                      'WORK',
                    ],
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
      'contacts',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default contacts;
