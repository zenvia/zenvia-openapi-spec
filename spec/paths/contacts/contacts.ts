import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as errorRef } from '../../components/schemas/error/base';
import { ref as contactRef } from '../../components/schemas/contacts-management/contact';
import { ref as contacChannelListRef } from '../../components/schemas/contacts-management/contact-channelList';
import { ref as contacResponseRef } from '../../components/schemas/contacts-management/responses/contact-response';
import { ref as listIdsRef } from '../../components/parameters/contacts-management/listIds';
import { ref as pageRef } from '../../components/parameters/page-legacy';
import { ref as sizeRef } from '../../components/parameters/size';
import { ref as emailRef } from '../../components/parameters/contacts-management/email';
import { ref as mobileRef } from '../../components/parameters/contacts-management/mobile';
import { ref as landlineRef } from '../../components/parameters/contacts-management/landline';
import { ref as facebookRef } from '../../components/parameters/contacts-management/facebook';
import { ref as instagramRef } from '../../components/parameters/contacts-management/instagram';
import { ref as twitterRef } from '../../components/parameters/contacts-management/twitter';
import { ref as meliRef } from '../../components/parameters/contacts-management/meli';
import { ref as channelListIdRef } from '../../components/parameters/contacts-management/channelList.id';

const post: OperationObject = {
  summary: 'Create a new contact',
  description: 'Allows the creation of contacts.',
  tags: ['Contacts'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          oneOf: [
            {
              title: 'Contact with channelList',
              allOf: [
                { $ref: contacChannelListRef },
              ],
            },
            {
              title: 'Contact with channels',
              allOf: [
                { $ref: contactRef },
              ],
            },
          ],
        },
        examples: {
          preferred: {
            summary: 'Create contact with channelList (preferred)',
            value: {
              'channelList': [
                {
                  id: '5510888883333',
                  type: 'mobile',
                },
                {
                  'type': 'whatsapp',
                  'id': 'US.839857923403480',
                  'idType': 'bsuid',
                  'username': 'johndoe',
                  'senderId': '557988754357',
                },
              ],
              'firstName': 'Rafael',
              'lastName': 'Souza',
              'birthdate': '1970-06-13',
              'customData': {
                'property1': '2022-06-13',
                'property2': '2022-06-13',
              },
              'addresses': [
                {
                  'country': 'Brazil',
                  'zipcode': '01310-300',
                  'state': 'SP',
                  'city': 'São Paulo',
                  'address': 'Av. Paulista',
                  'streetNumber': '2300',
                  'neighborhood': 'Bela Vista',
                },
              ],
              'listIds': [
                'list-id-01',
                'list-id-02',
                'list-id-03',
              ],
            },
          },
          deprecated: {
            summary: 'Create contact with channels (deprecated)',
            value: {
              'channels': {
                'email': 'contact@domain.example',
                'mobile': '5510888883333',
                'landline': '551044443333',
                'facebook': 'user.name.123',
                'instagram': 'user_name',
                'twitter': '@username',
                'meli': 'meliUser_123',
              },
              'firstName': 'Rafael',
              'lastName': 'Souza',
              'birthdate': '1970-06-13',
              'customData': {
                'property1': '2022-06-13',
                'property2': '2022-06-13',
              },
              'addresses': [
                {
                  'country': 'Brazil',
                  'zipcode': '01310-300',
                  'state': 'SP',
                  'city': 'São Paulo',
                  'address': 'Av. Paulista',
                  'streetNumber': '2300',
                  'neighborhood': 'Bela Vista',
                },
              ],
              'listIds': [
                'list-id-01',
                'list-id-02',
                'list-id-03',
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Contact created',
      content: {
        'application/json': {
          schema: {
            $ref: contacResponseRef,
          },
        },
      },
    } as ResponseObject,
    400: {
      description: 'Validation error. Returned when the request body is invalid',
      content: {
        'application/json': {
          schema: {
            $ref: errorRef,
          },
          examples: {
            mutuallyExclusiveFields: {
              summary: 'channels and channelList sent together',
              value: {
                code: 'VALIDATION_ERROR',
                message: 'Validation error',
                'details': [
                  {
                    'code': 'MUTUALLY_EXCLUSIVE_FIELDS',
                    'path': 'channelList',
                    'message': "The fields 'channels' and 'channelList' cannot be used together. Note: 'channels' is deprecated, please migrate to 'channelList'.",
                  },
                ],
              },
            },
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const get: OperationObject = {
  summary: 'List contacts',
  description: 'Lists all contacts available',
  tags: ['Contacts'],
  parameters: [
    { $ref: listIdsRef },
    { $ref: pageRef },
    { $ref: sizeRef },
    { $ref: channelListIdRef },
    { $ref: emailRef },
    { $ref: mobileRef },
    { $ref: landlineRef },
    { $ref: facebookRef },
    { $ref: instagramRef },
    { $ref: twitterRef },
    { $ref: meliRef },
  ],
  responses: {
    200: {
      description: 'Contacts available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: contacResponseRef,
            },
          },
        },
      },
      headers: {
        'x-total': {
          schema: {
            description: 'The total number of results available.',
            type: 'string',
            example: '100',
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
  get,
};

export default path;
