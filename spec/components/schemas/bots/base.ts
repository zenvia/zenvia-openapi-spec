// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const base: SchemaObject = {
  title: 'Bot Object',
  description: 'This is a Bot object model.',
  type: 'object',
  properties: {
    scheduleStart: {
      type: 'string',
      description: 'Start date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:30:00-03:00',
    },
    scheduleEnd: {
      type: 'string',
      description: 'End date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:45:00-03:00',
    },
    scheduleLimit: {
      type: 'string',
      description: 'Limit date and time of the dispatch formatted following RFC3339 standard (similar to ISO 8601). Default timezone is UTC.',
      example: '2021-01-15T17:59:00-03:00',
    },
    enqueueAfterLoad: {
      description: 'Enqueue after load',
      type: 'boolean',
      example: false,
    },
    callbackUrl: {
      title: 'Callback URL',
      description: 'This can be used for callback notifications.',
      type: 'string',
    },
    notifyEmails: {
      title: 'Notify E-mails',
      description: 'This can be used for e-mail notifications.',
      type: 'array',
      minItems: 0,
      items: {
        type: 'string',
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default base;
