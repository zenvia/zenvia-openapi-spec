import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const notificationOptIn: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'optin_request',
      },
      mediaUrl: {
        description: 'URL of an image to be displayed inside the opt-in request.',
        type: 'string',
        example: 'https://cdn.zenvia.com/main-picture.jpg',
      },
      title: {
        description: 'The topic of the recurring messages subscription. This will be displayed in the opt-in request.<br>You can send up to 10 opt-in requests for **different** titles per user over a 7 days period. A sub-limit of up to 5 opt-in requests may be sent to a contact in a day.',
        type: 'string',
        example: 'Weekly Sale'
      },
      frequency: {
        description: 'How often the messages will be sent after the contact opted-in.',
        type: 'string',
        enum: [
          'DAILY',
          'WEEKLY',
          'MONTHLY'
        ]
      },
      reOptIn: {
        description: 'Allow the contact to opt-in back again after opting-out.',
        type: 'string',
        enum: [
          'ENABLED',
          'DISABLED'
        ],
        default: 'ENABLED',
      },
      payload: {
        description: 'Content to be sent back as an [opt-in response](#section/OptIn-Response) message event when the contact accepts to receive recurring messages.<br>By default, the `title` of the request will be used as payload.',
        type: 'string',
      },
      timezone: {
        description: 'Indicates the timezone that will be used for scheduling the recurring messages.<br>',
        example: 'America/Sao_Paulo',
        default: 'UTC',
        type: 'string',
      }
    },
    required: [
      'title',
      'frequency',
    ]
  }]
}

export const ref = createComponentRef(__filename);
export default notificationOptIn;