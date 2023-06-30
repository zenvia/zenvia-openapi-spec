// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const automationDispatcher: SchemaObject = {
  title: 'Automation Dispatcher Object',
  description: 'This is an Automation dispatcher object',
  type: 'object',
  properties: {
    channels: {
      title: 'Channels',
      description: 'Contact communication channels. At least one communication channel must be provided.',
      type: 'array',
      minItems: 1,
      items: {
        title: 'Channel',
        description: 'Channel Object',
        type: 'object',
        properties: {
          channel: {
            title: 'Channel identifier',
            description: 'Automation channel identifier',
            type: 'string',
            example: 'sms',
          },
          recipient: {
            title: 'Channel recipient',
            description: 'Message recipient',
            type: 'string',
            example: '5510888883333',
          },
        },
      }
    },
    variables: {
      title: 'Variables',
      description: 'Variables list registered in automation steps',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
      example: {
        'name': 'John Doe',
        'birthdate': '01/01/1979'
      }
    },
  },
};

export const ref = createComponentRef(__filename);
export default automationDispatcher;
