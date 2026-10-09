import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as journeyLaunchRef } from '../../components/schemas/journey-launch/journey-launch';
import { ref as journeyLaunchResponseRef } from '../../components/schemas/journey-launch/journey-launch-response';

const post: OperationObject = {
  summary: 'Launch a journey',
  description: 'Launches a ZStudio journey for a contact/target.',
  tags: ['Journey Launches'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: journeyLaunchRef,
        },
        examples: {
          default: {
            summary: 'Launch a journey with context values of different types',
            value: {
              'journeyId': 'journey-01',
              'externalId': 'launch-01',
              'versionTag': 'v1',
              'context': {
                'nome': 'Rafael',
                'idade': 32,
                'clienteVip': true,
                'tags': ['novo', 'promocao'],
                'cartao': {
                  'bandeira': 'elo',
                },
                'pedido': {
                  'valor': 189.9,
                  'itens': ['camisa', 'calca', 'tenis'],
                },
              },
              'contact': {
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
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Journey launch created',
      content: {
        'application/json': {
          schema: {
            $ref: journeyLaunchResponseRef,
          },
          examples: {
            default: {
              summary: 'Created journey launch',
              value: {
                'id': '7388c68e-675e-435b-b2ec-f72677798678',
                'orgId': '5c408dd6-a39a-4eb1-b3b0-bf6f2f34ea39',
                'journeyId': 'journey-01',
                'externalId': 'launch-01',
                'contact': {
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
                'context': {
                  'nome': 'Rafael',
                  'idade': 32,
                  'clienteVip': true,
                  'tags': ['novo', 'promocao'],
                  'cartao': {
                    'bandeira': 'elo',
                  },
                  'pedido': {
                    'valor': 189.9,
                    'itens': ['camisa', 'calca', 'tenis'],
                  },
                },
                'versionTag': 'v1',
                'status': 'published',
                'createdAt': '2022-05-23T19:37:59.000Z',
              },
            },
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
};

export default path;
