// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as templateRef } from '../content/template';

const base: SchemaObject = {
  title: 'Chatbot Outbound',
  description: 'The customer can use this API to send communications to customers and, when the customer interacts, it must follow a specific flow, according to the Chatbot programming.',
  type: 'object',
  required: ['from', 'to', 'channel', 'content'],
  properties: {
    from: {
      title: 'From',
      description: 'Identifier of the channel to be triggered.',
      type: 'string',
      example: '551130309090',
    },
    to: {
      title: 'To',
      description: 'User identifier according to the channel.',
      type: 'string',
      example: '44988776655',
    },
    channel: {
      title: 'Channel',
      description: 'The channel name to be trigerred.',
      type: 'string',
      example: 'whatsapp',
    },
    contents: {
      title: 'Contents',
      description: 'Contents of template to trigger outbound.',
      type: 'array',
      oneOf: [{
        $ref: templateRef,
      }],
      discriminator: {
        propertyName: 'type',
        mapping: { template: templateRef },
      },
      items: { type: 'object' },
      minItems: 1,
    },
    nodeId: {
      title: 'Node Id',
      description: 'Node identifier in NLU.',
      type: 'string',
      example: 'node_6fb54f855f19a947',
    },
    attributes: {
      title: 'Attributes',
      description: 'Attributes of NLU contact to be set.',
      type: 'object',
      properties: {
        name: {
          title: 'Name',
          description: 'Name',
          type: 'string',
          example: 'John',
        },
        email: {
          title: 'Email',
          description: 'Contact\'s email',
          type: 'string',
          example: 'john@doe.email.com',
        },
        cpf: {
          title: 'CPF',
          description: 'Contact\'s CPF',
          type: 'string',
          example: '11122233344',
        },
        birth_date: {
          title: 'Contact\'s birth date',
          description: 'Contact\'s birthdate',
          type: 'string',
          example: '1970-06-13',
        },
        gender: {
          title: 'Gender',
          description: 'Contact\'s gender',
          type: 'string',
          example: 'Male',
        },
        address: {
          title: 'Address',
          description: 'Contact\'s address fields',
          type: 'object',
          properties: {
            postal_code: {
              description: 'Postal code',
              type: 'string',
              example: '11222-000',
            },
            street: {
              description: 'Street name',
              type: 'string',
              example: 'Street address',
            },
            number: {
              description: 'House number',
              type: 'number',
              example: 123,
            },
            complement: {
              description: 'House complement',
              type: 'string',
              example: 'Store 03',
            },
            district: {
              description: 'District name',
              type: 'string',
              example: 'District name',
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
          },
        },
      },
    },
    extra: {
      title: 'Extra',
      description: 'Extra attributes of NLU contact. New properties will be created that do not exist in NLU. Existing properties will have their values replaced.',
      type: 'object',
      example: {
        new_property: 'some_value',
        identification_number2: '',
      },
    },
    restartContact: {
      title: 'restartContact',
      description: 'Parameter to reset context variables and create a new service in NLU',
      type: 'boolean',
      example: true,
    },
    inactivityTime: {
      title: 'inactivityTime',
      description: 'Time in minutes that must pass since the user\'s last interaction with the assistant for the message to be sent. Example: If the user is interacting or interacted with the assistant 1 minute ago and the inactivity time required for the message to be sent is 2 minutes `"inactivityTime": 2`, the message would not be sent. If the interaction had occurred 3 minutes ago, the message would be sent.',
      type: 'number',
      example: 2,
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
