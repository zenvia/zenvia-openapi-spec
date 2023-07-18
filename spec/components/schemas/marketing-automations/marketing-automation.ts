// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const marketingAutomation: SchemaObject = {
  title: 'Marketing Automation Object',
  description: 'This is a marketing automation object',
  type: 'object',
  properties: {
    recipientChannels: {
      title: 'Recipient\'s channels',
      description: 'List of recipient\'s channels. All channels registered in marketing automation must be provided',
      type: 'object',
      minProperties: 1,
      properties: {
        sms: {
          type: 'string',
        },
        whatsapp: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        rcs: {
          type: 'string',
        },
      },
      additionalProperties: false,
      example: {
        sms: '5511999999999',
        email: 'email@email.com',
      },
    },
    variables: {
      title: 'Variables',
      description: 'Variables list registered in automation steps. All variables registered in marketing automation must be provided',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
      example: {
        'name': 'John Doe',
        'birthdate': '01/01/1979',
      },
    },
  },
  required: [
    'recipientChannels',
  ],
};

export const ref = createComponentRef(__filename);
export default marketingAutomation;
