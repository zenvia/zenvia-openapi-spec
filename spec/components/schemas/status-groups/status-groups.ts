// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const statusGroups: SchemaObject = {
  title: 'Status Groups',
  description: 'Status Groups information.',
  type: 'object',
  properties: {
    id: {
      title: 'ID',
      description: 'ID of the Zenvia plataform/service.',
      type: 'string',
      readOnly: true,
      example: 'whatsapp',
    },
    name: {
      title: 'Name',
      description: 'Name of the Zenvia plataform/service.',
      type: 'string',
      example: 'whatsapp',
    },
    type: {
      title: 'Type',
      description: 'Type of the Status Group. The configured type will only appear if available and if the user uses a valid [authentication](#section/Authentication)',
      type: 'string',
      enum: [
        'system',
        'configured',
      ],
      example: 'configured',
    },
    status: {
      title: 'Status',
      description: 'Indicates the status of a Zenvia group or component',
      type: 'string',
      enum: [
        'UP',
        'UNKNOWN',
        'WARNING',
        'DOWN',
      ],
      example: 'UP',
    },
    timestamp: {
      title: 'Timestamp',
      description: 'Indicates the moment in which the state was generated.',
      type: 'string',
      example: '2022-05-23T19:37:59.000Z',
      readOnly: true,
    },
    window: {
      title: 'Window',
      description: 'Indicates the time window that the state represents.',
      type: 'object',
      properties: {
        seconds: {
          title: 'Seconds',
          description: 'Size of the time window.',
          type: 'number',
          example: 60,
        },
        timestamp: {
          title: 'Timestamp',
          description: 'Beginning of the time window.',
          type: 'string',
          example: '2023-02-23T19:37:00Z',
        },
        id: {
          title: 'Id',
          description: 'Identifier of the time window.',
          type: 'number',
          example: 27929555,
        },
      },
    },
    components: {
      title: 'Components',
      description: 'Components that are a part of the status.',
      type: 'array',
      items: {
        title: 'Components',
        description: 'Components that are a part of the status.',
        type: 'object',
        properties: {
          id: {
            title: 'Id',
            description: 'Identifier of a component of the status groups.',
            type: 'string',
            example: 'core-api',
          },
          name: {
            title: 'Name',
            description: 'Name of a component of the status groups.',
            type: 'string',
            example: 'Platform',
          },
          status: {
            title: 'Status',
            description: 'Status of a component of the status groups.',
            type: 'string',
            enum: [
              'UP',
              'UNKNOWN',
              'WARNING',
              'DOWN',
            ],
            example: 'UP',
          },
        },
        additionalProperties: {
          description: 'Value provided to fill the variable named after the property name.',
          oneOf: [{
            type: 'string',
            example: 'Zenvia',
          }, {
            type: 'number',
            example: 1,
          }, {
            type: 'boolean',
            example: true,
          }],
        },
      },
    },
  },
};

export const ref = createComponentRef(__filename);
export default statusGroups;
