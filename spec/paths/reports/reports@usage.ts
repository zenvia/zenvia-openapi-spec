import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as endAtRef } from '../../components/parameters/endAt';
import { ref as startAtRef } from '../../components/parameters/startAt';
import { ref as groupByRef } from '../../components/parameters/groupBy';
import { ref as ticketTypesRef } from '../../components/parameters/ticketTypes';
import { ref as channelsRef } from '../../components/parameters/channels';
import { ref as productId } from '../../components/parameters/productId';
import { ref as dispatchId } from '../../components/parameters/dispatchId';
import { ref as usageResponseRef } from '../../components/schemas/reports/usage';

const get: OperationObject = {
  summary: 'Get usage report',
  description:
    'Currently, only usage for Web Chat, SMS, WhatsApp and Facebook is available. More channels will be added later. Error messages will provide details about any problems with the request.',
  tags: ['Usage'],
  responses: {
    200: {
      description: 'Usage entries',
      content: {
        'application/json': {
          schema: {
            $ref: usageResponseRef,
          },
        },
      },
    } as ResponseObject,
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                description: 'Something is wrong with your request',
                type: 'string',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Authorization error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                description: 'Something is wrong with your authentication token',
                type: 'string',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                description: 'Something is wrong in the server side',
                type: 'string',
              },
            },
          },
        },
      },
    },
    502: {
      description: 'Data source error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                description: 'Something is wrong with our data source',
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
};

const path: PathItemObject = {
  get,
  parameters: [
    {
      $ref: startAtRef,
    },
    {
      $ref: endAtRef,
    },
    {
      $ref: groupByRef,
    },
    {
      $ref: channelsRef,
    },
    {
      $ref: ticketTypesRef,
    },
    {
      $ref: productId,
    },
    { 
      $ref: dispatchId,
    },
  ],
};

export default path;
