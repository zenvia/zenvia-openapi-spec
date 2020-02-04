import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const contact: SchemaObject = {
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
              description: 'A list of contact address',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  street: {
                    description: 'Street number and name',
                    type: 'string',
                  },
                  city: {
                    description: 'City name',
                    type: 'string',
                  },
                  state: {
                    description: 'State abbreviation',
                    type: 'string',
                  },
                  zip: {
                    description: 'ZIP code',
                    type: 'string',
                  },
                  country: {
                    description: 'Full country name',
                    type: 'string',
                  },
                  country_code: {
                    description: 'Two-letter country abbreviation',
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
              minItems: 1,
            },
            birthday: {
              description: 'The birthday of the contact',
              type: 'string',
            },
            emails: {
              description: 'A list of email',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  email: {
                    description: 'Email address',
                    type: 'string',
                  },
                  type: {
                    description: 'The type of email',
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
            name: {
              description: 'Full contact name',
              type: 'object',
              properties: {
                formattedName: {
                  description: 'Full name as it normally appears',
                  type: 'string',
                },
                firstName: {
                  description: 'First name',
                  type: 'string',
                },
                lastName: {
                  description: 'Last name',
                  type: 'string',
                },
                middleName: {
                  description: 'Middle name',
                  type: 'string',
                },
                suffix: {
                  description: 'Name suffix',
                  type: 'string',
                },
                prefix: {
                  description: 'Name preffix',
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
              description: 'Contact organization information',
              type: 'object',
              properties: {
                company: {
                  description: 'Name of the contact\'s company',
                  type: 'string',
                },
                department: {
                  description: 'Name of the contact\'s department',
                  type: 'string',
                },
                title: {
                  description: 'Contact\'s business title',
                  type: 'string',
                },
              },
            },
            phones: {
              description: 'A list of contact phone number',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  phone: {
                    description: 'Formatted phone number',
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
                },
              },
              minItems: 0,
            },
            urls: {
              description: 'A list of contact URL',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  url: {
                    description: 'URL',
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
export default contact;
