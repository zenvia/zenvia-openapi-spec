import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as contextValueRef } from './context-value';

const journeyLaunch: SchemaObject = {
  title: 'Journey Launch',
  description: 'Launches a ZStudio journey for a contact/target.',
  type: 'object',
  properties: {
    journeyId: {
      title: 'Journey ID',
      description: 'The ZStudio journey identifier to launch.',
      type: 'string',
      example: 'journey-01',
    },
    externalId: {
      title: 'External ID',
      description: 'A caller-supplied identifier for this launch request, used by the API caller for tracking. Distinct from any contact/target externalId.',
      type: 'string',
      example: 'launch-01',
    },
    versionTag: {
      title: 'Version Tag',
      description: 'The journey version tag to launch.',
      type: 'string',
      example: 'v1',
    },
    context: {
      title: 'Context',
      description: 'Context values referenced by the journey\'s steps. Accepts arbitrarily nested objects and arrays.',
      type: 'object',
      additionalProperties: {
        $ref: contextValueRef,
      },
      example: {
        'cartao': {
          'bandeira': 'elo',
        },
        'pedido': {
          'valor': 189.9,
          'itens': ['camisa', 'calca', 'tenis'],
        },
      },
    },
    contact: {
      title: 'Contact',
      description: 'The contact/target the journey will be launched for. It accepts the same fields described in the [Contacts API](#tag/Contacts), either with `channelList` (recommended) or with `channels`.',
      type: 'object',
      example: {
        'channelList': [
          {
            'type': 'phone',
            'id': '5510888883333',
            'idType': 'mobile',
          },
        ],
        'firstName': 'Rafael',
        'lastName': 'Souza',
      },
    },
  },
  required: ['journeyId', 'externalId', 'contact'],
};

export const ref = createComponentRef(__filename);
export default journeyLaunch;
