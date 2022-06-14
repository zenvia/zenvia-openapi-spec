// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Contact',
  description: 'Contact information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the contact.',
      type: 'string',
      readOnly: true,
    },
    channels: {
      title: 'Channels',
      description: 'Contact communication channels. At least one communication channel must be provided.',
      type: 'object',
      minProperties: 1,
      properties: {
        email: {
          title: 'E-mail',
          description: 'Contact\'s e-mail address.',
          type: 'string',
          example: 'contact@domain.example',
        },
        mobile: {
          title: 'Mobile',
          description: 'Contact\'s mobile phone number.',
          type: 'string',
          pattern: '^[0-9]+$',
          example: '5510888883333',
        },
        landline: {
          title: 'Landline',
          description: 'Contact\'s landline phone number.',
          type: 'string',
          pattern: '^[0-9]+$',
          example: '551044443333',
        },
      },
    },
    firstName: {
      title: 'First Name',
      description: 'Contact\'s name.',
      type: 'string',
      example: 'Rafael',
    },
    lastName: {
      title: 'Last Name',
      description: 'Contact\'s surname.',
      type: 'string',
      example: 'Souza',
    },
    customData: {
      title: 'Custom Data',
      description: 'Set values for contact custom data fields created on [contact data fields API](#tag/Contacts/paths/~1contacts-data-fields/post).',
      type: 'object',
      additionalProperties: {
        title: 'Value',
        description: 'Sets a value to a contact custom data field (the property name). Contact custom data fields are global across contacts and must be previously created on [contact data fields API](#tag/Contacts/paths/~1contacts-data-fields/post).<br>Remember that dates are serialized as `string`.',
        oneOf: [{
          type: 'string',
          title: 'String/Date',
          example: '2022-06-13',
        }, {
          type: 'number',
          title: 'Number',
          example: 10,
        }, {
          type: 'boolean',
          title: 'Boolean',
          example: true,
        }],
      },
    },
    addresses: {
      title: 'Addresses',
      description: 'Contact\'s addresses.',
      type: 'array',
      items: {
        title: 'Address',
        description: 'Address object.',
        type: 'object',
        properties: {
          country: {
            title: 'Country',
            description: 'Address country.',
            type: 'string',
            example: 'Brazil',
          },
          zipcode: {
            title: 'Zip Code',
            description: 'Address zip code.',
            type: 'string',
            example: '01310-300',
          },
          state: {
            title: 'State',
            description: 'Address state or region.',
            type: 'string',
            example: 'SP',
          },
          city: {
            title: 'City',
            description: 'Address city.',
            type: 'string',
            example: 'São Paulo',
          },
          address: {
            title: 'Address',
            description: 'Street address.',
            type: 'string',
            example: 'Av. Paulista',
          },
          streetNumber: {
            title: 'Street Number',
            description: 'Street number.',
            type: 'string',
            example: '2300',
          },
          /*unitNumber: {
            title: 'Unit number',
            description: 'Apartament, suite, unit number, etc... or address line 2.',
            type: 'string',
            example: 'Cj. 182',
          },*/
          neighborhood: {
            title: 'Neighborhood',
            description: 'Address neighborhood or address line 3.',
            type: 'string',
            example: 'Bela Vista',
          },
        },
      },
    },
    listIds: {
      title: 'List IDs',
      description: 'IDs of the lists the contact is included in.',
      type: 'array',
      items: {
        type: 'string',
      },
      example: ['list-id-01', 'list-id-02', 'list-id-03'],
    },
    createdAt: {
      title: 'Created At',
      description: 'Timestamp of the contact creation.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    updatedAt: {
      title: 'Updated At',
      description: 'Timestamp of the contact update.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
