import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Contacts CSV Columns',
  type: 'object',
  description:
    'Represents the columns and their validations for each row of the contact import CSV file.',
  required: ['externalPlatform', 'externalId', 'firstName', 'lastName'],
  properties: {
    externalPlatform: {
      type: 'string',
      description: 'Name of the external platform.',
      enum: ['OMIE', 'BLING', 'TINY', 'MICROVIX', 'WBUY', 'OTHER'],
    },
    externalId: {
      type: 'string',
      description:
        'Contact ID on the external platform. Max 255 characters.',
      maxLength: 255,
    },
    firstName: {
      type: 'string',
      description:
        "Contact's first name. Min 1 and Max 100 characters.",
      minLength: 1,
      maxLength: 100,
    },
    lastName: {
      type: 'string',
      description:
        "Contact's last name. Max 100 characters.",
      maxLength: 100,
    },
    birthdate: {
      type: 'string',
      format: 'date',
      description: 'Birth date in YYYY-MM-DD format.',
    },
    email: {
      type: 'string',
      description:
        "Contact's email. Required if the `mobile` field is not filled in. Accepts multiple values separated by a comma.",
    },
    mobile: {
      type: 'string',
      description:
        "Contact's mobile phone. Required if the `email` field is not filled in. Accepts multiple values separated by a comma.",
    },
    landline: {
      type: 'string',
      description:
        "Contact's landline phone. Accepts multiple values separated by a comma.",
    },
    country: {
      type: 'string',
      description: 'Address country. Max 100 characters.',
      maxLength: 100,
    },
    zipcode: {
      type: 'string',
      description:
        'Address postal code. Max 50 characters.',
      maxLength: 50,
    },
    state: {
      type: 'string',
      description:
        'Address state. Max 100 characters. Required field for importing any other address information.',
      maxLength: 100,
    },
    city: {
      type: 'string',
      description: 'Address city. Max 100 characters.',
      maxLength: 100,
    },
    address: {
      type: 'string',
      description:
        'Address street/logradouro. Max 100 characters.',
      maxLength: 100,
    },
    addressNumber: {
      type: 'string',
      description: 'Address number. Max 50 characters.',
      maxLength: 50,
    },
    neighborhood: {
      type: 'string',
      description:
        'Address neighborhood. Max 100 characters.',
      maxLength: 100,
    },
  },
};

export const ref: string = createComponentRef(__filename);

export default base;
